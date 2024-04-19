import { generateMock } from '@anatine/zod-mock';
import { DeepPartial, schemas } from '@hicommonwealth/core';
import { Model, ModelStatic } from 'sequelize';
import z from 'zod';
import { bootstrap_testing } from './bootstrap';

/** Generated by ORM */
const GENERATED_PROPS = [
  'id',
  'created_at',
  'updated_at',
  'createdAt',
  'updatedAt',
  'deleted_at',
] as const;
type GeneratedProp = typeof GENERATED_PROPS[number];

/**
 * Seed options
 *
 * @param mock true to auto mock values in schemas
 * @param skip array of field names to remove from schemas when auto mocked
 * @param log log new records to console
 */
export type SeedOptions = {
  mock: boolean;
  skip?: GeneratedProp[];
  log?: boolean;
};

/**
 * Seeds aggregate for unit testing
 * - Partial seed values can be provided to define attributes specific to the unit test, and to drive how many child entities are created
 *
 * @param name name of the aggregate to seed
 * @param values partial seed values specific to the unit test
 * @param options seed options - defaults to mocking without skips
 * @returns tuple with main aggreate record and array of total records created
 * @see "libs/model/\_\_tests\_\_/community/group-lifecycle.spec.ts"
 */
export async function seed<T extends schemas.Aggregates>(
  name: T,
  values?: DeepPartial<z.infer<typeof schemas.entities[T]>>,
  options: SeedOptions = { mock: true },
): Promise<
  [z.infer<typeof schemas.entities[T]> | undefined, Record<string, any>[]]
> {
  const db = await bootstrap_testing();

  const records: Record<string, any>[] = [];
  await _seed(db![name], values ?? {}, options, records, 0);
  return [records.at(0) as any, records];
}

async function _seed(
  model: ModelStatic<Model>,
  values: Record<string, any>,
  options: SeedOptions,
  records: Record<string, any>[],
  level: number,
) {
  if (options.mock && schemas.entities[model.name as schemas.Entities]) {
    const mocked: Record<string, any> = generateMock(
      schemas.entities[model.name as schemas.Entities],
      {},
    );
    if (options.skip) for (const key in options.skip) delete mocked[key];
    values = {
      ...mocked,
      ...values,
    };
  }
  const record = (
    await model.create(values, { logging: options.log ? console.log : false })
  ).toJSON();
  records.push(record);

  if (typeof values === 'object') {
    for (const [key, value] of Object.entries(values)) {
      const association = model.associations[key];
      if (association && Array.isArray(value)) {
        record[key] = [];
        for (const el of value) {
          const child = await _seed(
            association.target,
            {
              ...el,
              [association.foreignKey]: record[model.primaryKeyAttribute],
            },
            options,
            records,
            level + 1,
          );
          record[key].push(child);
        }
      }
    }
  }

  level === 0 && options.log && console.log(model, record);
  return record;
}

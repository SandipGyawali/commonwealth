interface APIResponseFormat {
  id: number;
  chain_id: string;
  metadata: {
    name: string;
    description?: string;
  };
  requirements: {
    rule: 'threshold';
    source: {
      source_type: 'erc20' | 'erc721' | 'cosmos_native' | 'eth_native';
      evm_chain_id?: number;
      cosmos_chain_id?: number;
      contract_address?: string;
      token_symbol?: string;
    };
  }[];
  topics: any[];
  memberships: any[];
  updated_at: string;
  created_at: string;
}

class Group {
  public id: number;
  public communityId: string;
  public createdAt: string; // ISO string
  public updatedAt: string; // ISO string
  public name: string;
  public description?: string;
  public requirements: any[];
  public topics: any[];
  public members: any[];

  constructor({
    id,
    chain_id,
    created_at,
    updated_at,
    metadata,
    requirements,
    topics,
    memberships,
  }: APIResponseFormat) {
    this.id = id;
    this.communityId = chain_id;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
    this.name = metadata.name;
    this.description = metadata.description;
    this.requirements = requirements;
    this.topics = topics;
    this.members = memberships;
  }
}

export default Group;

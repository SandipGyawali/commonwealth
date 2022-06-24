/* @jsx m */

import m from 'mithril';

import 'components/component_kit/cw_wallet_option_row.scss';

import { WalletId } from 'types';

import { ComponentType } from './types';
import { CWText } from './cw_text';
import { CWCustomIcon } from './cw_icons/cw_custom_icon';
import { getClasses } from './helpers';

type WalletOptionRowStyleAttrs = {
  disabled?: boolean;
};

type WalletOptionRowAttrs = {
  onclick?: () => void;
  walletName: WalletId;
} & WalletOptionRowStyleAttrs;

const getWalletKeyFromValue = (value: string) => {
  return Object.entries(WalletId).find(([_, val]) => val === value)?.[0];
};

export class CWWalletOptionRow
  implements m.ClassComponent<WalletOptionRowAttrs>
{
  view(vnode) {
    const { disabled = false, onclick, walletName } = vnode.attrs;
    return (
      <div
        class={getClasses<WalletOptionRowStyleAttrs>(
          {
            disabled,
          },
          ComponentType.WalletOptionRow
        )}
        onclick={onclick}
      >
        <CWCustomIcon size={32} iconName={walletName} iconSize="large" />
        <CWText type="h5" fontWeight="semiBold" noWrap>
          {getWalletKeyFromValue(walletName)}
        </CWText>
      </div>
    );
  }
}
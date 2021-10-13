export function tokenTransfer(from, to, quantity, memo) {
  return {
    account: 'eosio.token',
    name: 'transfer',
    authorization: [
      {
        actor: from,
        permission: 'active',
      },
    ],
    data: {
      from,
      to,
      quantity,
      memo,
    },
  };
}

export function loginLink(user_id, account, sig) {
  return {
    account: 'd.app.login',
    name: 'link',
    authorization: [
      {
        actor: account,
        permission: 'active',
      },
    ],
    data: {
      user_id,
      account,
      sig,
    },
  };
}

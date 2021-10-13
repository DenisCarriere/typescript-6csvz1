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

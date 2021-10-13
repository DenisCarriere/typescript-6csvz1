import './style.css';
import * as scatter from './scatter';
import * as wallet from './wallet';
import * as actions from './actions';

const html = {
  wallet: document.getElementById('wallet'),
  from: document.getElementById('from'),
  to: document.getElementById('to'),
  quantity: document.getElementById('quantity'),
  memo: document.getElementById('memo'),

  // link account
  account: document.getElementById('account'),
  eosn_id: document.getElementById('eosn_id'),
  sig: document.getElementById('sig'),
};

// get account from Scatter
html.wallet.innerHTML = wallet.getWallet();
scatter.getAccount().then(({ account }) => {
  html.from.innerHTML = account || '';
  html.account.innerHTML = html.from.innerHTML;
});

html.to.innerHTML = 'proxy4nation';
html.quantity.innerHTML = '0.0045 EOS';
html.memo.innerHTML = 'eosn';

html.sig.innerHTML =
  'SIG_K1_K5p9hXaNELaEhSxMtptzF9LUk1P4Aevb9hFX2vNvir8opnqtWEgcLS3EE9Gjfm9VyN8Hy47VKCRJstUi815rVzM8YsForw';
html.eosn_id.innerHTML = '43512.d.eosn';

async function pushTransfer() {
  const from = html.from.innerHTML;
  const to = html.to.innerHTML;
  const quantity = html.quantity.innerHTML;
  const memo = html.memo.innerHTML;
  const action = actions.tokenTransfer(from, to, quantity, memo);
  const txid = await scatter.transact([action]);
  console.log(txid);
}

async function pushLink() {
  const from = html.from.innerHTML;
  const action = actions.loginLink(from, eosn_id, sig);
  const txid = await scatter.transact([action]);
  console.log(txid);
}

document
  .querySelector('#buttonTransfer')
  .addEventListener('click', async () => {
    pushTransfer();
  });

document.querySelector('#buttonLink').addEventListener('click', async () => {
  pushLink();
});

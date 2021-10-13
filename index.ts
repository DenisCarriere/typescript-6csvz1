import './style.css';
import { getAccount, getWallet, transact } from './scatter';
import { tokenTransfer } from './actions';

const html = {
  wallet: document.getElementById('wallet'),
  from: document.getElementById('from'),
  to: document.getElementById('to'),
  quantity: document.getElementById('quantity'),
  memo: document.getElementById('memo'),
};

// get account from Scatter
html.wallet.innerHTML = getWallet();
getAccount().then(({ account }) => {
  html.from.innerHTML = account || '';
});

html.to.innerHTML = 'proxy4nation';
html.quantity.innerHTML = '0.0045 EOS';
html.memo.innerHTML = 'eosn';

async function signTransaction() {
  const from = html.from.innerHTML;
  const to = html.to.innerHTML;
  const quantity = html.quantity.innerHTML;
  const memo = html.memo.innerHTML;
  const action = tokenTransfer(from, to, quantity, memo);
  const txid = await transact([action]);
  console.log(txid);
}

document
  .querySelector('#buttonTransfer')
  .addEventListener('click', async () => {
    signTransaction();
  });

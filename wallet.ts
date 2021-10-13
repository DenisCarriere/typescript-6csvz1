export function getWallet() {
  const { ethereum, __wombat__ } = window as any;
  if (!ethereum) return null;
  if (ethereum.isTokenPocket) return 'tokenpocket';
  if (ethereum.isMYKEY) return 'mykey';
  if (__wombat__) return 'wombat';
  return null;
}

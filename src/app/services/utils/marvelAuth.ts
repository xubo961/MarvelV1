import * as CryptoJS from "crypto-js";

export function MarvelAuthParams() {
  const ts: string = new Date().getTime().toString();
  const pubKey = "03a7b480a72bbae50c03eb165d5f15af";
  const privKey = "9697b54d26b348a444588e167777511851e2b36c";

  const hash: string = CryptoJS.MD5(ts + privKey + pubKey).toString();

  return {
    ts,
    apikey: pubKey,
    hash: hash
  }
}

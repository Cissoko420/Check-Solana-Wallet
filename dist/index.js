"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const address = new web3_js_1.PublicKey('7t9Nz2LYSESraADPutCdrsHy2Xrq8KZs8La1NxF4DokJ');
console.log(web3_js_1.PublicKey.isOnCurve(address));

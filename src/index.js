import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Binance from 'binance-api-react-native';
// import axios from 'axios';
// import CryptoJS from 'crypto-js';

const client2 = Binance({
  apiKey: '*',
  apiSecret: '*',
  grant_type: 'authorization_code'
});

// const BASE = 'https://api.binance.com';
// const signature = CryptoJS.HmacSHA256(client2).toString(CryptoJS.enc.Hex);
// const endpointBSwap = '/sapi/v1/bswap/pools';
// var url = BASE + endpointBSwap;

(async () => {
  await Promise.resolve(client2.time()
  .then(time => console.log("Test connectivity:", time)));
})();

(async () => {
  await Promise.resolve(client2.exchangeInfo()
  .then(exchangeInfo => console.log("exchangeInfo:", JSON.stringify(exchangeInfo))));
})();

(async () => {
  await Promise.resolve(client2.trades({ symbol: 'ETHBTC' })
  .then(trade => console.log("lastTrades:", JSON.stringify(trade))));
})();

(async () => {
  await Promise.resolve(client2.aggTrades({ symbol: 'ETHBTC', startTime: 1629162300000, endTime: 1629162360000})
.then(aggTrades => console.log("tradesFiltered:", JSON.stringify(aggTrades))));
})();

(async () => {
  await Promise.resolve(client2.myTrades({symbol: 'ETHBTC', startTime: 1629162300000})
.then(myTrades => console.log("myTrades:", JSON.stringify(myTrades))));
})();

(async () => {
  await Promise.resolve(client2.tradesHistory({ symbol: 'ETHBTC' , fromId: 0})
.then(tradesHistory => console.log("tradesHistory:", JSON.stringify(tradesHistory))));
})();

(async () => {
  await Promise.resolve(client2.withdrawHistory()
.then(withdrawHistory => console.log("withdrawHistory:", JSON.stringify(withdrawHistory))));
})();

(async () => {
  await Promise.resolve(client2.depositHistory()
.then(depositHistory => console.log("depositHistory:", JSON.stringify(depositHistory))));
})();

// (async () => {
//   await axios.get(client2.url);
// })();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const ErrorCodes = {
  UNKNOWN: -1000,
  DISCONNECTED: -1001,
  UNAUTHORIZED: -1002,
  TOO_MANY_REQUESTS: -1003,
  UNEXPECTED_RESP: -1006,
  TIMEOUT: -1007,
  INVALID_MESSAGE: -1013,
  UNKNOWN_ORDER_COMPOSITION: -1014,
  TOO_MANY_ORDERS: -1015,
  SERVICE_SHUTTING_DOWN: -1016,
  UNSUPPORTED_OPERATION: -1020,
  INVALID_TIMESTAMP: -1021,
  INVALID_SIGNATURE: -1022,
  ILLEGAL_CHARS: -1100,
  TOO_MANY_PARAMETERS: -1101,
  MANDATORY_PARAM_EMPTY_OR_MALFORMED: -1102, // eslint-disable-line id-length
  UNKNOWN_PARAM: -1103,
  UNREAD_PARAMETERS: -1104,
  PARAM_EMPTY: -1105,
  PARAM_NOT_REQUIRED: -1106,
  NO_DEPTH: -1112,
  TIF_NOT_REQUIRED: -1114,
  INVALID_TIF: -1115,
  INVALID_ORDER_TYPE: -1116,
  INVALID_SIDE: -1117,
  EMPTY_NEW_CL_ORD_ID: -1118,
  EMPTY_ORG_CL_ORD_ID: -1119,
  BAD_INTERVAL: -1120,
  BAD_SYMBOL: -1121,
  INVALID_LISTEN_KEY: -1125,
  MORE_THAN_XX_HOURS: -1127,
  OPTIONAL_PARAMS_BAD_COMBO: -1128,
  INVALID_PARAMETER: -1130,
  BAD_API_ID: -2008,
  DUPLICATE_API_KEY_DESC: -2009,
  INSUFFICIENT_BALANCE: -2010,
  CANCEL_ALL_FAIL: -2012,
  NO_SUCH_ORDER: -2013,
  BAD_API_KEY_FMT: -2014,
  REJECTED_MBX_KEY: -2015,
}
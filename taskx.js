import json from "./DataTransfer.json" with {type: 'json'};

const products = json;
const resArr = products.filter((product) => product.price > 30);

// eslint-disable-next-line no-console
console.log(resArr);
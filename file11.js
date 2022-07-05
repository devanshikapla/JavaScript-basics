//undefined
let first;
console.log(typeof first);
first="Dev";
console.log(first);

//null
let my=null;
console.log(typeof my);
//bug, error in javascript
//bigint

let number=132n;
console.log(number.MAX_SAFE_INTEGER);

let h=BigInt(123483922002299109292919929292910101010);
console.log(h);
console.log(number + h);
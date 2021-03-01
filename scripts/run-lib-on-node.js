const lib = require('@erkobridee/my-ghp-lib');
const math = require('@erkobridee/my-ghp-lib/math');

console.log(lib.libraryName);

console.log(`3 - 2 = ${math.subtract(3, 2)}`);

console.log(`1 + 2 + 3 = ${math.add(1, 2, 3)}`);

console.log(`5 - 1 = ${lib.math.subtract(5, 1)}`);

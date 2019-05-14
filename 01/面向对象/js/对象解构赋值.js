let value = { name: 'xxx', age: 20, score: [12, 23, 34, 45] };
let { name: a, score: [b, ...c] } = value;
console.log(a, b, c);
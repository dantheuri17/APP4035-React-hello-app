// let a, b; 
// let c = [2, 4, 16, 32, 64, 128];

// [a, b] = c;

// console.log(a)
// console.log(b)
// console.log(c)

// const names = ['Joe', 'Jane', 'Roy', 'Sam']; 
//  [a, b] = names; 

//  console.log(a)
//  console.log(b)
//  console.log(names)

//  const [a, b, c.slice(-2)] = ["hello", 1, true];

//  console.log(a)
//  console.log(b)


//  console.log(typeof a)
//  console.log(typeof b)

const [firstName, doubleNum] = ["John", x => x * 2, true, 34];
console.log(firstName)
console.log(doubleNum(8))

console.log(typeof firstName)
console.log(typeof doubleNum)

console.log(new Date())

console.log(new Date().toLocaleString('en-US'))
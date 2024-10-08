let fruits = ['apple', 'banana', 'orange'];

fruits.push("guava")

console.log(fruits)

fruits.pop()

console.log(fruits)

let numbers = [3, 1, 5, 2, 4];

numbers.sort()

console.log(numbers)

let numbers2 = numbers.map((a)=>(a*2))

console.log(numbers2)

let numbers3 = numbers.filter((a)=>(a>3))

console.log(numbers3)

let numbers4 = numbers.reduce((acc, curr)=>acc + curr, 0)

console.log(numbers4)

/*--------------------------------------------------------------------------*/

let message = "Hello, World!";

console.log(message.length)

let text = "Hello, World!";

console.log(text.toLowerCase())
console.log(text.toUpperCase())

let sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.substring(4,13))

console.log(sentence.split(" "))
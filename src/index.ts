export {};

// EXAMPLE 1 - Initialize and Type a Map using an Array

// ✅ Initialize Map from Array

// 👇️ const map1: Map<string, string>
const map1: Map<string, string> = new Map([
  ['name', 'Bobby Hadz'],
  ['country', 'Chile'],
]);

// 👇️ Map(2) { 'name' => 'Bobby Hadz', 'country' => 'Chile' }
console.log(map1);

// ---------------------------------------------------

// // EXAMPLE 2 - Initialize and Type a Map using an Object

// const obj = { name: 'Bobby Hadz', country: 'Chile' };
// const map1 = new Map<string, string>(Object.entries(obj));

// // 👇️ Map(2) { 'name' => 'Bobby Hadz', 'country' => 'Chile' }
// console.log(map1);

// ---------------------------------------------------

// // EXAMPLE 3 - Typing a Map with values of type array

// // 👇️ const map1: Map<string, string[]>
// const map1: Map<string, string[]> = new Map([
//   ['colors', ['blue', 'red', 'green']],
//   ['languages', ['english', 'spanish', 'german']],
// ]);

// // ✅ Get value from Map
// // 👇️ ['blue', 'red', 'green']
// console.log(map1.get('colors'));

// // ✅ Iterate over Map
// map1.forEach((value, key) => {
//   console.log(value, key);
// });

// // ✅ Check if a key exists in Map
// console.log(map1.has('colors')); // 👉️ true

// // ✅ Set a new key in Map
// map1.set('countries', ['UK', 'Spain', 'Germany']);

// ---------------------------------------------------

// // EXAMPLE 4 - Declaring an empty typed Map in TypeScript

// // 👇️ const map1: Map<string, string[]>
// const map1: Map<string, string[]> = new Map([]);

// map1.set('colors', ['blue', 'red', 'green']);
// map1.set('languages', ['english', 'spanish', 'german']);

// // 👇️ {'colors' => ['blue', 'red', 'green'],
// //     'languages' => ['english', 'spanish', 'german']
// //    }
// console.log(map1);

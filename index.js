// // first 2 values are 1s
// // logic
// fib(index) {
//  ...
//  return value;
// }

// fib(0) => 1
// fib(4) => 5
// fib(6) => 13

// function fib(index) {
//   // index-1 + index-2
//   // 截止
//   if (index <= 1) {
//     return 1;
//   }

//   return fib(index - 1) + fib(index - 2);
// }

// value: 1, 1, 2, 3, 5, 8, ...
// index: 0, 1, 2, 3, 4, 5, ...

function fib(index) {
  // for index count
  // 前两个数字之和
  let num_1 = 1;
  let num_2 = 1;

  if (index < 2) {
    return 1;
  } else {
    for (let index_2 = 0; index_2 < index - 1; index_2++) {
      let cloneNum_2 = num_2;
      num_2 = num_1 + num_2;
      num_1 = cloneNum_2;
      //   num.push(num[index_2] + num[index_2 + 1]);
    }
    // return num[num.length - 1];
    return num_2;
  }
}

console.log(fib(6));

// livia@nissispace.com

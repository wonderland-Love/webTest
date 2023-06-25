// // first 2 values are 1s
// // logic
// fib(index) {
//  ...
//  return value;
// }

// fib(0) => 1
// fib(4) => 5
// fib(6) => 13

// 通过递归实现
function fib(index) {
  // index-1 + index-2
  // 截止
  if (index <= 1) {
    return 1;
  }

  return fib(index - 1) + fib(index - 2);
}

// ----------------------------------------------------
// value: 1, 1, 2, 3, 5, 8, ...
// index: 0, 1, 2, 3, 4, 5, ...

function fib_2(index) {
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

// console.log(fib(6));

//----------------------------------------------------
// value: 1, 1, 2, 3, 5, 8, ...
// index: 0, 1, 2, 3, 4, 5, ...

// js中的闭包来实现,优点是可以提高取值速速且不占用全局变量
const fib_3 = (() => {
  // 立刻执行函数提前计算好 index 取值范围 0-10000 的 value
  let fibArr = [1, 1];

  for (let index_1 = 0; index_1 < 10000; index_1++) {
    let newFibNum = fibArr[index_1] + fibArr[index_1 + 1];
    fibArr.push(newFibNum);
  }

  return (index) => {
    return fibArr[index];
  };
})();

// console.log(fib_3(4));
// console.log(fib_3(5));

//----------------------------------------------------
// 使用闭包，通过 hashMap 的缓存来实现，优点相较于上面的那种是可以不限制 index范围
// value: 1, 1, 2, 3, 5, 8, ...
// index: 0, 1, 2, 3, 4, 5, ...

const fib_4 = (() => {
  const hashMap = new Map();

  return (index) => {
    // 如果计算过该 index 就直接从 hashMap 中返回该 index 对应的 value
    if (hashMap.has(index)) {
      console.log("已经计算过了");
      return hashMap.get(index);
    } else {
      let num_1 = 1;
      let num_2 = 1;
      for (let index_2 = 0; index_2 < index - 1; index_2++) {
        let cloneNum_2 = num_2;
        num_2 = num_1 + num_2;
        num_1 = cloneNum_2;
      }
      hashMap.set(index, num_2);
      return num_2;
    }
  };
})();

console.log(fib_4(5));
console.log(fib_4(5));


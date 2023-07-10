function gcd(A)
{
  // let arr=[];
  // for(let i=0;i<A.length;i++)
  // {
  //   arr.push(A.filter(_,i));
  // }
  // return arr;
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

}

const A1=[12,15,18];
console.log(gcd(A1));
























// function findMaxDivisor(A) {
//   let divisors = [];

//   for (let i = 0; i < A.length; i++) {
//     let tempArray = A.slice(0, i).concat(A.slice(i + 1));
//     let gcd = tempArray.reduce(function(a, b) {
//       return findGCD(a, b);
//     });
//     divisors.push(gcd);
//   }

//   let result = Math.max(...divisors);
//   return result;
// }

// function findGCD(a, b) {
//   return b === 0 ? a : findGCD(b, a % b);
// }

// let A = [12, 15, 18, 30];
// let result = findMaxDivisor(A);
// console.log(result); // Output: 6

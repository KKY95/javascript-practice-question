function reverseWords(A,B) {
    B=B % A.length;
    return A.slice(-B) + A.slice(0,-B);
}
  

const res="scaler";
console.log(reverseWords(res,2));



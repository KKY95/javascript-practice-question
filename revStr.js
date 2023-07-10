function reverseWords(A) {
    let words = A.split(" ");
    words = words.reverse();
    let result = words.join(" ").trim().replace(/\s+/g, ' ');
    return result;
  }
  

const res="crulgzfkif gg ombt vemmoxrgf qoddptokkz op xdq hv ";
console.log(rev(res));
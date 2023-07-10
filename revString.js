function rev(A)
{
   let words=A.split(" ");
   words=words.reverse();
   let final=words.join(" ").trim();
   return final;
}

const sen="the sky is blue";
console.log(rev(sen));
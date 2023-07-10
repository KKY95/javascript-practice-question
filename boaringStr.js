function boring(A){
    const A1=A.split("");
    const even=A1.filter(char=>char.charCodeAt()%2==0);
    const even1=even.sort();
    const odd=A1.filter(char=>char.charCodeAt()%2!==0);
    const odd1=odd.sort();
    const B=even1.join("").concat(odd1.join(""));
    console.log(B);
    console.log(`even ${even} odd ${odd}`);
    let isboar=1;
    for(let l=0;l<B.length-1;l++)
    {
     if(Math.abs(B[l].charCodeAt()- B[l+1].charCodeAt())==1)  
     {
        isboar=0;
        break;
     }
    } 
     return isboar;
    }

console.log(boring("jchghcejb"));



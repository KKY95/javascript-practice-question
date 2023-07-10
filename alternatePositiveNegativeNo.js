function posNeg(A)
{
    let arr=[];
    const A1=A.filter(char=>(char>=0)) //positive 
    const A2=A.filter(char=>(char<0)) //negative
    const n=Math.max(A1.length,A2.length);
    for(let i=0;i<n;i++)
    {
        if(i<A2.length)
        {
            arr.push(A2[i]);
        }
        if(i<A1.length){
            arr.push(A1[i]);
        }
    }
    return arr;
}

const x=[-1, -2, -3, 4, 5];
console.log(posNeg(x));

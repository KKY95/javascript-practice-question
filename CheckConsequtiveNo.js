function consNo(A)
{
    A.sort((a,b)=>a-b);
    for(let i=1;i<A.length;i++)
    {
        if(A[i]-A[i-1]!==1 && A[i]-A[i-1]!==-1)
        {
            return 0;
        }
    }
    return 1;
}

const num=[1, 3, 2, 5];
console.log(consNo(num));
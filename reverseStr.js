function rev(A)
{
    var result="";
    for(let i=A.length-1;i>=0;i--)
    {
        result+=A[i];
    }
    return result;
}

const reverse="scaler";
console.log(rev(reverse));
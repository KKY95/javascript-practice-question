function addBinary(A,B)
{
    let result="";
    let a=A.length-1;
    let b=B.length-1;
    let carry=0;
    while(a>=0 || b>=0 || carry>0)
    {
        let sum=carry;
        if(a>=0)
        {
            sum+=parseInt(A.charAt(a));
            a--;
        }
        if(b>=0)
        {
            sum+=parseInt(B.charAt(b));
            b--;
        }
        result+=(sum%2);
        carry=Math.floor(sum/2);
    }
    return result;
}

console.log(addBinary(11,11));
function alpha(A)
{
    for(let i=0;i<A.length;i++)
    {
        if(!(A[i]>='a' && A[i]<='z') && !(A[i]>='A' && A[i]<='Z') && !(A[i]>='0' && A[i]<='9'))
        {
            return 0;
        }
    }
    return 1;
}

const arr= ['&', 'c', 'a', 'l', 'e', 'r', 'a', '2', '0', '2', '0'];
console.log(alpha(arr));
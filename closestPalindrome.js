function palindroime(A)
{
    let last=A.length-1;
    let count=0;
    for(let i=0;i<A.length/2;i++)
    {
        if(A[i]!=A[last])
        {
            count++;
        }
        else if(count>1)
        {
            break;
        }
        last--;
    }
    if(count==1)
    {
        return "YES";
    }
    else if(count==0)
    {
        if(A.length%2==0)
        {
            return "NO";
        }
        else{
            return "YES";
        }
    }
    else{
        return"NO";
    }
}

console.log(palindroime("adaddb"));
function AMP(arr)
{
    arr.sort((a,b)=>a-b);
    const commonDiff=arr[1]-arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]-arr[i-1]!== commonDiff && arr[i]-arr[i-1]!== -commonDiff )
        {
            return 0;
        }  
    }
    return 1;
}



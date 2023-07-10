function pattern(rows)
{
    const arr1=[];
    for(let i=1;i<=rows;i++)
    {
        const arr=[];
        for(let j=1;j<=rows;j++)
        {
            if(j<=i)
            {
            arr.push(j);
            }
            else 
            {
                arr.push(0);
            }
        }
        arr1.push(arr);
    }
    return arr1;
}


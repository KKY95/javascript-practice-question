function kRow(A)
{
    //return (11 ** A).toString().split("").map(Number);
    let arr=[];
    for(let i=0;i<=A;i++)
    {
        arr[i]=new Array(i+1);
        for(let j=0;j<=i;j++)
        {
            if(j==0 || j==i)
            arr[i][j]=1;
            else
            arr[i][j]=arr[i-1][j-1]+arr[i-1][j];
        }
    }
    return arr[A];
}

console.log(kRow(5));
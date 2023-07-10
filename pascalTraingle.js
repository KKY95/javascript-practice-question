function pascal(A)
{
    let arr=[];
    let space=A-1;
    for(let i=0;i<A;i++)
    {
        arr[i]=new Array(i+1);
        for(let j=0;j<=i;j++)
        {
            if(j==0 || j==i)
            arr[i][j]=1;
            else
            arr[i][j]=arr[i-1][j-1]+arr[i-1][j];
        }
        for(let k=1;k<=space;k++)
        {
            if(i==0)
            arr[i][k]=0;
            else
            arr[i][k]=arr[i-1][k-1]+arr[i-1][k];
        }
    }
    return arr;
}

const triangle = pascal(3);
  for (let i = 0; i < triangle.length; i++) {
    console.log(triangle[i].join(' '));
  }
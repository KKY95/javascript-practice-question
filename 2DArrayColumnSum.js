function columnSum(A)
{
    let result=[];
    for(let j=0;j<A[0].length;j++)
    {
        let sum=0;
        for(let i=0;i<A.length;i++)
        {
            sum+=A[i][j];
        }
        result.push(sum);
    }
    return result;
}

const arr=[[1,2,3,4],
[5,6,7,8],
[9,2,3,4]];
console.log(columnSum(arr));
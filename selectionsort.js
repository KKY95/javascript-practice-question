let arr=[9,3,6,1,5,8,2,0];
for(let i=0;i<arr.length;i++)
{
    let min=i;
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[j]<arr[min])
        {
            min=j;
        }
    }
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }


console.log(arr)
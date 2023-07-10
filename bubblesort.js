function bubblesort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
        if(arr[j]>arr[j+1])
        {
            let temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        }
    }
    }
    return arr;
}

const array=[4,1,3,2,9,5,0,6,8,7];
bubblesort(array)
console.log(array); 
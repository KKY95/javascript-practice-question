function insertionSort(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        let value=arr[i];
        let index=i;
        while(arr[index-1]>value)
        {
            arr[index]=arr[index-1];
            index--;
        }
        arr[index]=value;
    }
    return arr;
}

const array=[9,1,7,5,3,1,7];
insertionSort(array)
console.log(array);
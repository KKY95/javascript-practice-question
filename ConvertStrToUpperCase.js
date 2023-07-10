function upper(A){
    let result=[];
    for(let char of A)
    {
        if(char>='a' && char<='z')
        {
            result.push(char.toUpperCase());
        }
        else 
        result.push(char);
    }
    return result;
}


const arr1=['S', 'c', 'A', 'L', 'E', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y'];
console.log(upper(arr1));
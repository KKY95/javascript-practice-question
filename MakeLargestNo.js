function largest(A)
{
    return A.sort((a,b)=>`${b}${a}` - `${a}${b}`).join('').replace(/^0+/, '0');
}

const A1=['2','30','1'];
console.log(largest(A1));
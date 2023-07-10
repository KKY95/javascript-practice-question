function freq(A)
{
    let count={};
    for(let i=0;i<A.length;i++)
    {
        const char=A.charAt(i);
        count[char]=(count[char] || 0)+1;
    }
    return count;
}

const str="karan is karan";
console.log(freq(str));
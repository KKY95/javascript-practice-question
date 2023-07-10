function prefix(A)
{
        let prefix=A[0];
        for(let i=1;i<A.length;i++)
        {
            while(A[i].indexOf(prefix)!=0)
            {
                prefix=prefix.slice(0,prefix.length-1);
                //console.log(`${prefix}+" "+ ${A[i]}`);
                //if(prefix=="") return "";
            }
        }
        return prefix;
}

const arr=["abvf", "abefg", "abd"];
console.log(prefix(arr));

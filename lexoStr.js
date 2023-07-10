function lexo(A)
{
    let str=A.split("_");
    let first=[];
    let second=[];
    first=str[0];
    second=str[1];
    let second1=[];
    let str2="";
    let result="";
    let len=first.length+str2.length;
    for(let i=second.length-1;i>=0;i--)
    {
       second1.push(second[i]); 
    }
    str2=second1.join("");
    let f1="";
    f1=first.slice(-(len-2));
    return str2.concat(f1);
    //return result.slice(0,result.length-2);
    //first.slice(-(len-2))
}

const str3="abb_c";
console.log(lexo(str3));
function compare(A)
{
    let str="bob";
    let count=0;
    let pop=A.indexOf(str);
    console.log(pop);
    while(pop!=-1)
    {
        count++;
        pop=A.indexOf(str,pop+1);
    }
   return count;
}

const aa="bobob";
console.log(compare(aa));
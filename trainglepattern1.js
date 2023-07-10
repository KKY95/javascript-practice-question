function trainglePtrn(rows)
{
    let space=rows-1;
    for(let i=1;i<=rows;i++)
    {
        for(let k=1;k<=space;k++)
        {
            process.stdout.write(` `);
        }
        for(let j=1;j<=i;j++)
        {
            process.stdout.write(`${j}`);
        }
        for(let l=i-1;l>=1;l--)
        {
            process.stdout.write(`${l}`);
        }
    space--;
    console.log("\n");
}
}

trainglePtrn(4);
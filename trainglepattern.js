function trainglePtrn(rows)
{
    let space=rows-1;
    for(let i=1;i<=rows;i++)
    {
        for(let k=1;k<=space;k++)
        {
            process.stdout.write(` `);
        }
        for(let j=1;j<=(i*2)-1;j++)
        {
            process.stdout.write(`${j}`);
        }
    space--;
    console.log("\n");
}
}

trainglePtrn(4);
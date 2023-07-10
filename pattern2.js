function pattern2(rows)
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
        space--;
        console.log("\n");
    }
}

pattern2(5);
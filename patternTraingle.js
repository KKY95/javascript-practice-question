function barfi(rows)
{
    let space=rows-1;
    let space1=1;
    for(let i=1;i<=rows;i++)
    {
        for(let s=1;s<=space;s++)
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
        for(let k=rows-1;k>=1;k--)
        {
            for(let space=1;space<=space1;space++)
            {
                process.stdout.write(` `);  
            }
            for(let l=1;l<=k;l++)
            {
                process.stdout.write(`${l}`);
            }
        space1++;
        console.log("\n");
    }
}

barfi(4);
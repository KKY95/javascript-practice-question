function printPattern(rows){
    let noOfSpace=rows-1;
    for(let i=rows;i>=1;i--){
        for(let k=1;k<=noOfSpace;k++)
        {
            process.stdout.write(` `);
        }
        for(let j=1;j<=((rows-noOfSpace)*2)-1;j++)
        {
            process.stdout.write(`*`);
        }
        noOfSpace--;
        console.log("\n");
    }
}

printPattern(6);

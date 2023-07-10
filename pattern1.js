function pattern(rows){
    for(let i=1;i<=rows;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write(`${j}`);
        }
        console.log("\n");
    }
}

pattern(5);
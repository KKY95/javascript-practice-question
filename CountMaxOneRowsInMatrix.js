function maxonerows(A){
    let countones=0;
    let rowmax=0;
    for(let i=0;i<A.length;i++)
    {
        let count=0;
        for(let j=0;j<A[i].length;j++)
        {
            if(A[i][j]==1)
            {
                count++;
            }            
        }
        if(count>countones)
        {
            countones=count;
            rowmax=i;
        }
    }
    return rowmax;
}

const matrix= [
    [0, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1]
  ];

  console.log(maxonerows(matrix));
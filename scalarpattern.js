function pattern(A) {
    const arr = [];
  
    for (let i = 0; i < A; i++) {
      const row = [];
      for (let j = 0; j < A; j++) {
        if (j <= i) {
          row.push(j + 1);
        } else {
          row.push(0);
        }
      }
      arr.push(row);
    }
    return arr;
  }
  
  const arr = pattern(3);
  
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
function merge(A, B) {
    let len = A.length + B.length;
    let C = [];
    let pointerA = 0;
    let pointerB = 0;
    for (let i = 0; i < len; i++) {
        if (pointerA < A.length && pointerB < B.length) {
            if (A[pointerA] < B[pointerB]) {
                C.push(A[pointerA]);
                pointerA++;
            }
            else {
                C.push(B[pointerB])
                pointerB++;
            }
        }
        else if (pointerA >= A.length) {
            C.push(B[pointerB])
            pointerB++;
        }
        else if (pointerB >= B.length) {
            C.push(A[pointerA])
            pointerA++;
        }
    }
    return C;
}

let A1 = [2, 3, 5];
let B1 = [1, 5, 7, 9, 11];
console.log(merge(A1, B1));
// //len 8
// i=0      pointerA=0   pointerB=1     c=[1]
// i=1      pointerA=1   pointerB=1     c=[1,2]
// i=2      pointerA=2   pointerB=1     c=[1,2,3]
// i=2      pointerA=2   pointerB=2     c=[1,2,3,5]
// i=3      pointerA=3   pointerB=2     c=[1,2,3,5,5]
// i=4      pointerA=3   pointerB=2     c=[1,2,3,5,5] 
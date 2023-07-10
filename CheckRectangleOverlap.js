function overlap(A,B,C,D,E,F,G,H)
{
    // if(A<G && B<H && E<C && F<D)
    // {
    //     return 1;
    // }
    // else
    // return 0;
    return (A<G && B<H && E<C && F<D)? 1: 0
}

console.log(overlap(0,0,4,4,2,2,3,3));
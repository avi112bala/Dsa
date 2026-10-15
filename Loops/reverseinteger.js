function reverseInteger(x){
    let ncopy=x
    let n=Math.abs(x)
    let rev=0
    while(n>0){
        let rem=n%10;
        rev=(10*rev)+rem
        n=Math.floor(n/10)
    }
    return ncopy<0?-rev:rev

}

const result=reverseInteger(1534236469)
console.log(result);
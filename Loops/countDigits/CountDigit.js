function countDigit(n){
    if(n==0) return 1
    let count=0
    n=Math.abs(n)
    while(n>0){
        n=Math.floor(n/10)
        count++
    }
return count
}

const result=countDigit(238373838)
console.log(result);





//The floor is always down the the number like if 10.3->10,10.5->10, 10.9->10
//The ceil is always up the the number like if 10.3->11,10.5->11, 10.9->11
//Math.abs make the number positive like if -28292 then Math.abs(-28292)->28292
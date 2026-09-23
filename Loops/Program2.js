
// Problem:Count negative Number in an array 



function countnegative(arr){
    let count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++
        }
    }
    return count
}
const count=countnegative([3,4,3,-1,3,-3,-4,-5])
console.log(count)
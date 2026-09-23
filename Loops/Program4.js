// Problem : Find minimum number in an array 

function minimumNumber(arr){
    let min=arr[0]
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i]
        }
    }
    return min
}
const result=minimumNumber([5,7,3,1,-8,9,12])
console.log(result)
     
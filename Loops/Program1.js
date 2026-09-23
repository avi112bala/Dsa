// Problem:Search a number in array and if found return that number index otherwise -1


function serchelement(arr,ele){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===ele){
            return i
        }
    }
    return -1
}

const search=serchelement([3,4,6,7,1],6)
console.log(search)
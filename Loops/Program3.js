// Problem : Find larget number in an array 


function largestnumber(arr){
    let sl=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(sl<arr[i]){
            sl=arr[i]
        }
    }
    return sl
}

const result=largestnumber([-3,-7,-4])
console.log(result)
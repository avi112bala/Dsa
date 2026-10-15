// in this if there is increasing sorted array then -->[1,4,6,9]. in this case arr[i]<arr[i+1]
// in this if there is decrising sorted array then -->[9,6,4,1] in this case arr[i]>arr[i+1]
// in this if there is  sorted and non decrsing array then -->[1,2,4,4,6,7,7] in this case arr[i+1]>=arr[i]


// const removeDuplicate=(arr)=>{
//     let x=0;
//     let a=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[x]){
//             x=x+1
//             arr[x]=arr[i]
//         }
//     }
//     return x+1
// }





//INSTEAD OF RETURNING COUNT WE RETURN ARRAY

// METHOD 1

// const removeDuplicate=(arr)=>{
//     let x=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[x]){
//             x=x+1
//             arr[x]=arr[i]
//         }
//     }
//     let result=[]
//     for(let j=0;j<=x;j++){
//         result[j]=arr[j]
//     }

//     return result
// }


// METHOD 2

const removeDuplicate=(arr)=>{
    let x=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[x]){
            x=x+1;
            arr[x]=arr[i]
        }
    }
    return arr.slice(0,x+1)
}




console.log(removeDuplicate([1,2,2,3,5,5,7,9,9]));
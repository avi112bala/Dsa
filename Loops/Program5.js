// Problem : Find second largest element

function secondlarget(arr){
    if(arr.length<2){
        return null
    }
    let fl=-Infinity
    let sl=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>fl){
            sl=fl
            fl=arr[i]
        }else if(arr[i]>sl&&arr[i]!=fl){
            sl=arr[i]
        }
    }
    return sl
}

const result=secondlarget([1,5,3,7,9,12,12])
console.log(result);


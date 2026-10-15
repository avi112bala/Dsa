// 1      
// 1 0    
// 1 0 1   
// 1 0 1 0  
// 1 0 1 0 1 
// 1 0 1 0 1 0

n = 6
let switchnumber = 1
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
        row = row + switchnumber
        if (switchnumber === 1) {
            switchnumber = 0
        } else {
            switchnumber = 1
        }
    }
    console.log(row);
}
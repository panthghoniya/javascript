let a = 10 
let b = 20

try {
    if(a != b){
        throw new Error("panth")
    }
} catch (error) {
    console.log(error);
    
}
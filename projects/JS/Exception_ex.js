// try{
//     var x = 10/3;
//     if(x == Infinity){
//         throw "arithmetic exception";
//     }
//     console.log(x);
// }catch(error){
//     console.log(error);
// }finally{
//     console.log("Finally block")
// }

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i = 0; i<matrix.length; i++){
    for(let j = 0; j<matrix[i].length; j++){
        console.log(matrix[i][j])
    }
}
// let hash = '';
// let size = 8;
// for(let i = 0; i < size/2; i++){
//     hash = '';
//     for(let j = 0; j < size/2; j++){
//         hash += ' #';
//     }
//     console.log(hash);
//     hash = '';
//     for(let j = 0; j < size/2; j++){
//         hash += '# ';
//     }
//     console.log(hash);
// }
let size = 8;
let board = '';
for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
        if((i + j) % 2 == 0){
            board += ' ';
        }else {
            board += '#'
        }
    }
    board += '\n';
}
console.log(board);
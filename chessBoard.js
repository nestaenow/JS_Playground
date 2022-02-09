let hash = '';
for(let i = 0; i < 4; i++){
    hash = '';
    for(let j = 0; j < 4; j++){
        hash += ' #';
    }
    console.log(hash);
    hash = '';
    for(let j = 0; j < 4; j++){
        hash += '# ';
    }
    console.log(hash);
}
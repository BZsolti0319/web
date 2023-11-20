function VeletlenSorrend(tomb) {
    let ujTomb = [];
    
    let index = Math.floor(Math.random() * tomb.length);
    
    ujTomb.push(tomb[index]);
    
    tomb.splice(index, 1);
    
    for (let i = 0; i < 5; i++) {
        index = Math.floor(Math.random() * tomb.length);
        ujTomb.push(tomb[index]);
        tomb.splice(index, 1);
    }
    
    ujTomb.push(tomb[0]);

    return ujTomb;
}

console.log(VeletlenSorrend(["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"]));
console.log(VeletlenSorrend(["h", "k", "sze", "cs", "p", "szo", "v"]));
console.log(VeletlenSorrend([1, 2, 3, 4, 5, 6, 7, 8, 9]));
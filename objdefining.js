const mygame={
    status:"In Progress",
    Score:[1,2,5,8],
};

Object.defineProperty(mygame,"maxPlayer",{value:5,writable:false});
console.log(mygame.maxPlayer);

Object.defineProperty(mygame,"highScore",{
    get(){
        return Math.max(...this.Score);
    }
});
console.log(mygame)
console.log(Object.keys(mygame));
console.log(Object.values(mygame));

const myobj={pro1:23,};
Object.seal

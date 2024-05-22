let myData=function(x,y)
{
    return x*y;
};
let amyData=myData
console.log(amyData(12,5));


//Syntax for arrow function=  let function=(arguments)=>expression


let arrowData=(name,age,city)=> name+age+city+"@gmail.com";

console.log(arrowData("kabilan",24,"mdu"));

let func=()=>"Hello";.0
console.log

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num);
}


console.log(sum(1, 2, 3)); 
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20)); 
// console.log(sum());

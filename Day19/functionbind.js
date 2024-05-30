let student={
    name:"Kabilan",
    greeting:function()
    {
        console.log(`Welcome ${this.name}`)
    }
};

setTimeout(student.greeting,1000);

// setTimeout(function()                               //Wrapper Function
// {
//     student.greeting()
// },1000)

//setTimeout(()=>student.greeting(),2000);            //arrow function


let greetme=student.greeting.bind(student);         //Bind Function
setTimeout(greetme,5000);0

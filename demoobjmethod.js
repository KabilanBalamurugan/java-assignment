const student1={name:"Kabilan"}
Object.assign(student1,{name:"KABILAN",});
console.log(student1);


const student2={...student1,...{Age:24,City:"Madurai",State:"Tamilnadu"}}
console.log(student2)


// const student3={}
// Object.defineProperty(student3,"name",{value:"Kabilan",writable:true});
// console.log(student3);
// student3.name=" Kabilan Balamurugan";
// console.log(student3);


// const student4={}
// Object.defineProperty(student4,"name",{value:"Karthik",writable:false});
// Object.defineProperty(student4,"Date",{get(){return new Date()}});
// console.log(student4.name);
// console.log(student4.Date);


const student2AsArray=Object.entries(student1)
// console.log(student2AsArray)
// console.log(typeof(student2AsArray))
let arraytoobj=Object.fromEntries(student2AsArray)
console.log(arraytoobj);


// const student5={name:"Naveen"}
// Object.freeze(student5);
// student5.designation="Software Engineer";
// delete student5.name;
// student5.name="Kabilan Balamurugan"



let person={
    name:"Kabilan",
    age:24,
    "UG Qualification":"B.E"
}

console.log(person["UG Qualification"]);

person['PG Qualification']="M.E"
console.log(person['PG Qualification'])


let student={
    dob:2000,
    calculateAge(){
        console.log(new Date().getFullYear()-this.dob)
    }
}

let student1=student
student=null;
student1.calculateAge();

let student={
    name:"Kabilan",
    display:function()
    {
        console.log("HELLO")
    }
};

let employee={
    name:"Karthick",
    display:function()
    {
        console.log(this.name);
     
    },
    calculateMyAge:function(dob)
    {
        this.dob=dob;
        console.log(new Date().getFullYear()-dob);        
    }   
};
employee.display();
employee.display.bind(student)();
employee.calculateMyAge.bind(student)(2000);

 

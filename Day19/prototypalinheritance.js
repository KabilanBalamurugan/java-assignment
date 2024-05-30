let parent={
    name:"Kabilan",
    calculateAge:function(dob)
    {
        this.dob=dob;
        console.log(new Date().getFullYear()-this.dob)
    },
};

let child={
    __proto__:parent,
};

// child.__proto__=parent;
child.calculateAge(1996);

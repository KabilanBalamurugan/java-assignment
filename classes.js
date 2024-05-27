class student
{
    constructor(name,age,city)
    {
        this.name=name;
        this.age=age;
        this.city=city;
    }

    display()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }
}

let s1=new student("Kabilan",24,"Madurai");

s1.display();

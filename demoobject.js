function employee(id,name,desg)
{
    this.id=id;
    this.name=name;
    this.desg=desg;
}
emp1=new employee("1","Kabilan","Mechanical Engg")
emp2=new employee("8","Karthick","Civil Engg")
emp3=new employee("5","Dhivagar","Computer Engg")

console.log(emp1.name+"n"+emp2.name);   //\n is line break
console.log(emp2.desg);
console.log(emp3.id)

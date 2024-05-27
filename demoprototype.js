function college(name,year,city){
    this.name = name;
    this.year=year;
    this.city=city;
}

college.prototype.display=function(){
    return (`${this.name} ${this.year} ${this.city}`)
}

c1=new college("SIT",1995,"Virudhunagar");
console.log(c1.display());

teacher.prototype = c1;

function teacher(salary,yoe){
    this.salary=salary;
    this.yoe=yoe;
}

teacher.prototype.showteacher=function(){
    return(`${this.salary} ${this.yoe}`)
}
c1=new teacher(12000,5)
console.log(t1.showteacher());

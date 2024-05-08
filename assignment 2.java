class student1
{   
    String name,deg;
    int age,year;
    address adr;
    employees emy;
    student1(String name,int age,String deg,int year,address adr,employees emy){
        this.name=name;
        this.age=age;
        this.deg=deg;
        this.year=year;
        this.adr=adr;
        this.emy=emy;
    }
    public void displaystudent()
    {
        System.out.println("Name="+name);
        System.out.println("Age="+age);
        System.out.println("Degree="+deg);
        System.out.println("Year="+year);
        adr.displayaddress();
        emy.displayemplyoee();

    }
}


public class aggregation {
    public static void main(String[] args) 
    {
        address ad1= new address(1, "LPN Street", "Madurai", 625007);
        employees em1=new employees(4457,"I-exceed");
        student1 onj=new student1("Kabilan",24,"BE",4,ad1,em1);
        onj.displaystudent();
        

    }
}

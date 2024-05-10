class studentt{
    String name;
    int age;
    studentt(String name,int age){
        this.name=name;
        this.age=age;
        
        System.out.println(name+age);
    }
    public void displayy(){
        System.out.println("hello"+name+age);
    }
}
class teacher extends studentt{
    int numb;
    teacher(String name,int age,int numb){
       
        super(name,age);
        super.displayy();
}
    public void disp(){
        System.out.println("Age "+numb);
    }
}

 class master extends teacher{
    int numb;
    master(String name,int age,int numb){
        super(name,age,numb);
        super.disp();
    }
}


public class inheritdemo {
    public static void main(String[] args) {
        teacher obj5=new teacher("Kabilan",24,1);
        master obj8=new master("Kavi",23,1);
        obj5.disp();
        
    }
}

class demostat 
{
    String name="Kabilan";
    static int y=50;

    public void display()
    {
        System.out.println("Name"+name);
        System.out.println(y);
    }
    static public void display1()
    {
        demostat dem=new demostat();
        System.out.println(dem.name);
        
    }
}
public class demostatic {
    public static void main(String[] args) {
    demostat dem=new demostat(); 
    dem.display(); 
    demostat.display1();
       
    }
}

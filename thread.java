class example extends Thread
{
    public void run()
    {
        for(int i=0;i<=10;i++)
        {
            System.out.println("Child"+i);
            
        } 
    }
}

public class demothread2 {
    public static void main(String[] args) {
        example obj=new example();
        obj.setName("DEMOTHREAD");
        System.out.println(obj.getName());
        obj.start();
        
        
    }
}

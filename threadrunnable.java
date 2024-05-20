class sampl implements Runnable{

    sampl(){}
        public void run()
        {
            System.out.println("Start");

            for(int i=0;i<10;i++)
            {
                System.out.println("Child"+i);
            }       
        }
}
public class demothread1 {
    public static void main(String[] args)
    {
        // sampl onh=new sampl();
        // Thread t1=new Thread(onh);
        // t1.setName("Runnable");
        // System.out.println(t1.getName());
        // t1.start();   

        Thread t1=new Thread(new sampl());
        t1.start();
    }
}

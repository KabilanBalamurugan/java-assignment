class demomultithread extends Thread{
   synchronized public void run()
    {
        for(int i=0;i<5;i++)
        {
        try{
            System.out.println(Thread.currentThread().getName()+" is running and the value is "+i);
        Thread.sleep(500);
        }catch(InterruptedException d){}
    }
}
}
class demomultithread1 extends Thread{
    public void run()
    {
        for(int i=0;i<=8;i+=2)
        {
        try{
            System.out.println(Thread.currentThread().getName()+" is running and the value is "+i);
        Thread.sleep(500);
        }catch(InterruptedException d){}
        }
}
}

public class demothreadmulti {

    public static void main(String[] args) {
        // demomultithread obj1=new demomultithread();
        // demomultithread1 obj2=new demomultithread1();
        // obj1.setName("Thread A");
        // obj2.setName("Thread B");
        // obj1.start();  
        // try{obj1.join();}catch(InterruptedException d){}
        // obj2.start();
        Thread t1=new Thread(new demomultithread(),"Thread-A");
        Thread t2=new Thread(new demomultithread(),"Thread-B");
        t1.start();
        try{t1.join(1500);}catch(InterruptedException d){}
        t2.start();

    }
}

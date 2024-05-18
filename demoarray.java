import java.io.DataInputStream;

public class demoarray
{
    public static void main(String[] args) 
    {
        
       int x[]=new int[5];
       
     DataInputStream din = new DataInputStream(System.in);
            for(int i=0;i<5;i++)
            {
                try{
                   x[i]=Integer.parseInt(din.readLine());
                }catch(Exception e){}
            }
            System.out.println(x[0]);

    }
}

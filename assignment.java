class attendance
{
    attendance(int hoursperday)
    {
          
    if(hoursperday>=8){
         System.out.println("You're present for the day");
     }
     else
     if(hoursperday<8 && hoursperday>=4){
         System.out.println("You're present for half of the day");
     }
     else{
            System.out.println("You're absent");
        }
    }
}

public class assignment{
public static void main(String[]args)
{
    new attendance(5);
    
}
}
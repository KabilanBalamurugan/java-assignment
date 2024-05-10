 class phone
{
    public void calling()
    {
        System.out.println("Calling from phone");
    }
}
class samsung extends phone
{
    
    public void calling()
    {
        System.out.println("Call from Samsung");
    }
}




public class demoupcasting {
    public static void main(String[] args) {
          phone p = new samsung(); //upcasting
          p.calling();
        samsung s= (samsung)p;  //Downcasting 
        s.calling();
        
    }
}

    


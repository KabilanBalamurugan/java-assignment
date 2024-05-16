import package.studentdata;
class demopack extends studentdata {
    demopack(String city,String st_name,int plotno,int pincode ){
        super(city,st_name,plotno,pincode);
        
        super.displayaddress();
        
    }
}
public class demopackage {
    public static void main(String[] args) {
      new demopack( "Madurai","LPN Street", 1, 625007);
       
    }
}

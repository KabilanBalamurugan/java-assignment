package iexceed;

public class studentdata
{   private String city,st_name;
    private int plotno,pincode;
    
    public studentdata(String city,String st_name,int plotno,int pincode){

        this.city=city;
        this.st_name=st_name;
        this.plotno=plotno;
        this.pincode=pincode;

    }
   
    public void displayaddress()
    {   
        System.out.println("city="+city);
        System.out.println("st_name="+st_name);
        System.out.println("Plotno="+plotno);
        System.out.println("pincode="+pincode);

    }
}



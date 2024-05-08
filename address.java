class address
{   String st_name,city;
    int plotno,pincode;
    
    address(int plotno,String st_name,String city,int pincode){

        this.plotno=plotno;
        this.st_name=st_name;
        this.city=city;
        this.pincode=pincode;

    }
    public void displayaddress()
    {
        System.out.println("Plotno="+plotno);
        System.out.println("st_name="+st_name);
        System.out.println("city="+city);
        System.out.println("pincode="+pincode);

    }
}


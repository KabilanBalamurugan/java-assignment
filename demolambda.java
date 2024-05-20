@FunctionalInterface
interface mydata {

    public void show(int x ,int y);
}


            /*Without Lambda Expression */

// public class demolambda implements mydata {
//     public static void main(String[] args) {
//         demolambda obj= new demolambda();
//         obj.show();
//     }
//     public void show(){
//         System.out.println("WElcome to lambda");
//     }
// }  

            /*With Lambda Expression */


//Lambda Expression  syntax = (parameter(s))->{}
public class demolambda {

    public static void main(String[] args) {
        mydata obj =(int x ,int y)->{
            System.out.println("Welcome");
            System.out.println("To Lambda");
            System.out.println(x*y);
        };
        obj.show(23,32);
    }
}

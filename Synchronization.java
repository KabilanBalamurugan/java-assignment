class callme
{
  synchronized public void call(String msg){
    System.out.println("[");
    System.out.println(msg);
    System.out.println("]");
    this.display();
  }  
  public void display(){
    for(int i=0;i<5;i++){
      System.out.println(i);
    }
}}


class caller implements Runnable{
  String str;
  callme targ;
    caller(String str,callme targ){     
      Thread t;
      {
        this.targ=targ;
        this.str=str;t=new Thread(this);
        t.start();
      }
      

    }
    @Override
    public void run() {
      targ.call(str);
    }
}
public class demosync {

    public static void main(String[] args) {
        callme target=new callme();
        caller obj=new caller("hi", target);
        caller obj1=new caller("hello", target);
    }
}

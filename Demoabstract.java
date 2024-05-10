
abstract class Book{
	String title;
	abstract void setTitle(String s);
	String getTitle(){
		return title;
	}
}


class MyBook extends Book{
    void setTitle(String s){
        title=s;
    }
}

public class Demoabstract{
	
	public static void main(String []args){
		
		MyBook new_novel=new MyBook();
		new_novel.setTitle("Art of War");
		System.out.println("The title is: "+new_novel.getTitle());
    
		
	}
}

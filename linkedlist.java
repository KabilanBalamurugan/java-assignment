import java.util.Iterator;
import java.util.LinkedList;


public class demolinkedlist {
    public static void main(String[] args) 
    {
        
        LinkedList l2 = new LinkedList<String>();
        l2.add("Madurai");
        l2.add("Chennai");
        l2.add("Trichy");
        l2.add("Dindugal");
        l2.add("Salem");
        l2.add("Madurai");

       // l2.removeAll(l2);
        l2.remove("Madurai");
        System.out.println(l2.removeLast());
           System.out.println(l2.get(0));
        System.out.println(l2.getFirst());
        System.out.println(l2.getLast());
        System.out.println(l2.peek());
        System.out.println(l2.peekFirst());

        l2.removeIf(x-> x.equals("Chennai")|| x.equals("Salem"));
        System.out.println(l2);
        Iterator itr=l2.iterator();
        while(itr.hasNext())
        {
            System.out.println(itr.next());

        }
       }

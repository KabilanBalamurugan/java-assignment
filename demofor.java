public class demofor {
    public static void main(String[] args) {
        int n=5;
        for(int i=0;i<n;i++){
            // for(int j=0;j<(n-i);j++){
            //     System.out.print(j+1+" ");
                
            //  }
            //  for (int k=0;k<=n;k++)
            //  {
            //     System.out.print(k+"");
            //  }
             System.out.println();
            if(i>=5)
            {
                continue;
            }

            System.out.println((" ".repeat(n-i-1)+(String.valueOf(i+1)+" ").repeat(i+1)));
        }
    }
}

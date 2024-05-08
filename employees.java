class employees
{   String company_name;
    int emp_id;
    
    employees(int emp_id,String company_name){

        this.emp_id=emp_id;
        this.company_name=company_name;
    }
    public void displayemplyoee()
    {
        System.out.println("EmpId"+emp_id);
        System.out.println("company_name="+company_name);

    }
}

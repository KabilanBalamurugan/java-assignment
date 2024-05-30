function checkmyvalue(x,y)
{   
    console.log(x/y);
    console.log("Executed");
}
checkmyvalue(10,2);

function checkmyvalue1(x,y)
{
    try
    {
        if(y==0)
            {
                throw("Don't divide by zero")
            }
        else
            {
                console.log(x/y);
            }
    }catch(e)
    {
        console.log(e);
    }
    finally
    {
        console.log("Program Ends")
    }
    
}
checkmyvalue1(10,0)

console.log(Math.pow(2,2));


function power_iterative(x,n)
{
    let result=1;
    for(let i=0;i<n;i++)
        {
            result*=x;
        }
        return result;
}
console.log(power_iterative(2,5));


function power_recursive(x,n)
{
    if(n==1)
        {
            return x;
        }
    else
        {
            return x*power_recursive(x,n-1);
        }    
}
console.log(power_recursive(2,5));

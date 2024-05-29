function a()
{
    let x=10;   //lexical environment
    function b()
    {
        console.log("Value = "+x);
    }
    b();
}
a();


//Global Variable

let counter=0;

function getCount()
{
    let counter=2;      //local Variable
    counter+=1;
    return counter;
}
function getCount1()
{
    counter+=2;
    return counter;
}
console.log(getCount());
console.log(getCount1());

function getmecount()
{
    x=10;                   //without let or var => Global Variable
    console.log(x*x);
}
function getmecount1()
{
    
    console.log(x+x);
}
getmecount();
getmecount1();

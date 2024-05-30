
//Executor Function

let p=new Promise(function(resolve,reject)
{
    let name="Kabilan";
    if(name.startsWith("k"))
        {
            // console.log("Accepted");
            resolve("ACCEPT");
        }else
        {
            // console.log("Rejected");
            reject("REJECT");
        }
});

//Consumer Function

p.then(
    function(x)
     {
    //     console.log("Accepted");
        console.log(x);
    }
).catch(
    function(x)
    {
        // console.log("Rejected")
        console.log(x);
    });



    //Arrow Function

    // new Promise((resolve,reject)=>{}).then(()=>{}).catch(()=>{})

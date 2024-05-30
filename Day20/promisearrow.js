new Promise((resolve,reject)=>
    {   
        let age=parseInt(prompt("Mention the age= "));
        if(age>=18)
            {
                resolve();
            }
        else{
                reject();
            }
    }).then(()=>
        {
            console.log("You're Eligible");
        })
        .catch(()=>
        {
            console.log("Wait for next Election");
        });

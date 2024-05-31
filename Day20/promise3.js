new Promise((resolve,reject)=>
    {
        let userInput=prompt("ENTER True or False= ")
        userInput.toLowerCase()==='true'?payment=true:payment=false   //Ternary Operator
        payment?resolve():reject()

    }).then(()=>
    {
        console.log("Success");
    }).catch(()=>
    {   
        console.log("Failed");
    })

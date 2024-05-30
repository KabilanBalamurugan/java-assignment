new Promise((resolve,reject)=>
    {
        let userInput=prompt("ENTER True or False= ")
        userInput.toLowerCase()==='true'?payment=true:payment=false
        payment?resolve():reject()

    }).then(()=>
    {
        console.log("Success")
    }).catch(()=>
    {   
        if(payment===false)
            {
                console.log("Rejected")
            }
        else
        {
            console.log("Invalid")
        }
    })

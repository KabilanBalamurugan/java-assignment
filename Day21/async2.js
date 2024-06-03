let promise_age=new Promise(function(resolve,reject)
{
    let age=15;
    if(age>=18)
        {
            resolve("Age is checked and Verified");
        }
    else
        {
            reject("Age is checked and Rejected");
        }
})

async function checkMyEligibility()
{
    let age_condition=await promise_age;
    console.log(age_condition);
    if (age_condition.substr("Verified")) {
        return Promise.resolve("Age is Accepted")
    }
    else
    {
        return Promise.reject("Age is not accepted")
    }
    
}

checkMyEligibility().then((x)=>{console.log(x);}).catch((x)=>{console.log(x);}) 

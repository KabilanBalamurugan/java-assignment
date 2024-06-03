async function voting(age,is_id)
{
    this.age=age;
    this.is_id=is_id;
    if(this.age>=18)
        {
            return Promise.resolve("Eligible");
        }
    else
        {
            return Promise.reject("Not Eligible");
        }           
}
voting(19,true).then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)});

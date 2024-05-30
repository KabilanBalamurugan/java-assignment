function sometoconsole(element,content)
{
    var element=new Array();
    element.push(content);
    for(i of element)
        {
            console.log(i);
        }
}

sometoconsole('arr',"Hello")
sometoconsole('arr',"How")
sometoconsole('arr',"Are")
sometoconsole('arr',"You")

let writearray=sometoconsole.bind(null,'arr');              //Partial Function
writearray("How");
writearray("Are");
writearray("You");

let userInput=prompt("Enter the marks- ");
let marks= parseInt(userInput);

if (marks<40)
    {
        console.log("Re-appear")
    }
else if(marks>40 && marks<60)
    {
        console.log("Pass")
    }
else if(marks>60 && marks<80)
    {
        console.log("A Grade")
    }
else if(marks>80 && marks<=100)
    {
        console.log("S Grade")
    }
else
    {
        console.log("Check your Marks")
    }

    ternary operator condition chain

    let result= marks<40 ? "Reappear":marks>40 && marks <60 ? "Pass"
                :marks>60 && marks <=80 ? "A Grade"
                :marks>80 && marks<=100 ? "S Grade"
                :"Check Your Marks"
    console.log(result);

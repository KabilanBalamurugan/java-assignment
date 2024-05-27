function drinkSong(){
var word = "Bottles";
var count = 50;
//var count = parseInt(prompt("Enter the No.of Bottles")); //Take input type
while(count>0){
    console.log(count+" "+word+ " of drink on the wall, "+count+" "+word+" of drink");
    console.log("Take one down and pass it around");
    count=count-1;
    if(count>=1){
        if(count==1){var word= "Bottle"}
    }else{
        console.log("No more left");
    }
}
}drinkSong()

var a = Math.floor(Math.random() * 5) + 1;
/*The var a values makes it pick a 
random number between 1 and 5*/
var b = prompt("guess a number");
//allow users to input number of their choice
/*The below if statements compares the computer random 
picked number to the users inputed number and output the first arguemnt if the two variable correlate and
the second variable if they are not correlating*/
if(a==b){
    console.log("right guess")
}
else {console.log("wrong guess")}
console.log(a)

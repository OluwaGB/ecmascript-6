/*Const functionName = (parameters)=>{arguement}*/

const add = (x, y) => {
	let sum = x + y;  
	console.log(sum);
}
add(35, 7);
 
/* ES6 function syntax
const function =(parameters) => {
	arguements;
}
function call;*/

const profile = (name,age)=>{

	var name = "iyanuoluwa";
	var age =22;
	console.log (`name: ${name} age: ${age} `)
}
profile();
const gain = (language,topic) =>{ var language = prompt("enter language");
var topic = prompt("enter topic")
	if(language=="javascript" && topic=="function in Es6"){
	console.log("additional js knowledge")
	}else
	{
		console.log("New set of fronend knowledge")
	}
}

gain("javascript",23);

var votersAge = [23,24,25,18,18,19,24,54,43,34,23,2118,76,77,15,16,16,17,18,19,20]
const eligibleCount = (eligible) =>{var count = 0;
	for (let eligible of votersAge >=18){
		count++;
	}
	console.log(count);
}
eligibleCount();

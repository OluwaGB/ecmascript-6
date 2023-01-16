let obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
	console.log(v);
}

let profile = {
	name:"i t", age:23, sex:'male'
};
for (let x in profile){
	console.log(x);
}
/* syntax for the for in loop statement in ecma script6 
let obj = {objproperty:value,objproperty1:value;object property3:value;}
for (let x in obj){
	console.log(x);
}*
this loop statement is used to acess the object property*/

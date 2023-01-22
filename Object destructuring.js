var obj = {id: 42, name: "Jack"};

let {id = 10, age = 20} = obj;

console.log(id); // 42
console.log(age); // 20

/*object destructuring is re assogning variable to an object
syntax obj = {property:value;} 
new obj {property:value;} = obj;
*/

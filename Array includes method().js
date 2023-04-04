name = ["iyanuoluwa",23,"peter","I T",35]
console.log(name);
/*The bellow array method array.includes(list) is use to check whether a particukar list is present in an array and the returned value for this method will.always be boolean (i.e true or false).*/
a = name.includes("iyanuoluwa");
b = name.includes(27);
c = name.includes("IT");
console.log(a);//boolean value true will be consoled
console.log(b);//boolean value false will.be consoled
console.log(c); //boolean value false will be consoled because  its IT not I T

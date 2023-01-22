let a, b;
({a, b} = {a: 'Hello ', b: 'Jack'});

console.log(a + b);
/* another syntax for object destructuring 
{property} = {property:value};*/
({firstname,lastname} = {firstname:"iyanuoluwa",lastname:"oyeboade"});
console.log(firstname + lastname);

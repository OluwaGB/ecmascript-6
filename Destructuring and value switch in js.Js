let a = 5;
let b = 'iyanuoluwa'
let temp = a;/* the trmp switch the value of variable a from
5  to that of b*/
a = b;//a is being assign to b here
b=temp;/the value of variable b is being switched as well
console.log(a,b);//output is 'iyanuoluwa',5
let x ='I T';
let y = 35;
[x,y] = [y,x,];/*the   list one in the right side array is 
assigned the value of y in the other side array while that of list 2 is assign
x in the other side of the array*/
console.log(x,y);//output:35,IT

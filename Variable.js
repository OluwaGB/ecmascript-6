remote = function remoteWork(){
  console.log("Work from the comfort of your home");
}
console.log(typeof remote);

/*¥The typeof() method in javascript is used to discover the type of a variable be */
hybrid = 'working from home and sometimes need to be on site'
console.log(typeof hybrid)
binary = 10;
console.log(typeof binary)
octal = 0o10
console.log(typeof octal)
hexadecimal = 10;
console.log(typeof hexadecimal)
binary = 0b10
console.log(typeof binary);
num= 2e5;
console.log(num)
console.log(Number (1234))
console.log(Number ("text"))
console.log(Number (12345678910))
console.log(Number (true))
console.log(Number (false))
console.log(Boolean (true))
console.log(Boolean (false))
console.log(Boolean (42))
console.log(Boolean (0))


console.log(BigInt(11));  //  ->  11n
console.log(BigInt(0x11));  //  ->  17n
console.log(BigInt(11e2));  //  ->  1100n
   
console.log(BigInt(true));  //  ->  1n
   
console.log(BigInt("11"));  //  ->  11n

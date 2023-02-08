class Profile{
  constructor(name) {
	this.name = name;
  }
  speak() {
	console.log(this.name + ' is a boy');
  }
}

class Iyanu extends Profile{
  speak() {
	console.log(this.name + ' speaks loud.');
  }
}
let iyanu = new Iyanu('iyanuoluwa');
iyanu.speak(); // Rex barks.
/* the constructor() is a method of class in ES6*/


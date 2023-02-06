class Rectangle {
  constructor(height, width) {
	this.height = height;
	this.width = width;
  }
  
  get area() {
	return this.calcArea();
  }

  calcArea() {
	return this.height * this.width;
  }
}

const square = new Rectangle(15, 5);

console.log(square.area); // 25

class convert{
constructor(pounds, naira){
	this.pounds = pounds;
	this.naira = naira;
}
get answer(){
	return this.convertPounds();
}
convertPounds(){
	return this.pounds * this.naira;
}
}
const converter = new convert(10,100);
console.log(converter.answer);

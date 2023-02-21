let myIterableObj = { 
  [Symbol.iterator] : function* () {
	yield 11; yield 12; yield 13;
  }
};
console.log([...myIterableObj]); // [ 1, 2, 3 ]

let myIterableObject = {
	[Symbol.iterator]: function*(){
	yield 1; yield 2;
}

};
console.log([...myIterableObj]);

onst myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
myData2 = myArray[3][0][0]//to acess the value 10
/* The [3] is used to acess the fourth nested array while [0]is use to acess the first sub array in the it and [0] is used to aceess the first list in the sub array of the nested array*/
myData3 = myArray[3][2]//To acess the fourth nested array and the third list in it sub array which is equal to 14
console.log(myData)
console.log(myData2)

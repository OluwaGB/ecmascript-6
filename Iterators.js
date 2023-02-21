// Created by Wit

const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
	for(let index of arr) {
	  yield `${index}`;
	}
  }
};

// Uncomment step 2. to 5. one at a time and see the result

const all = [...my_obj]		   // 1. Spread the object into [0, 1, 4, a, 9, c, 16]
//   .map(i => parseInt(i, 10))   // 2. Parse to decimal int (10 means base 10) -> [0, 1, 4, NaN, 9, NaN, 16]
//   .map(Math.sqrt)			  // 3. Apply square root to all -> [0, 1, 2, NaN, 3, NaN, 4]		
//   .filter((i) => i < 5)		// 4. Filter to keep only numbers that's smaller than 5 -> [0, 1, 2, 3, 4]   
//   .reduce((i, d) => i + d)	 // 5. Add all number in the current array -> 10
;

console.log(all);

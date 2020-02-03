//We have to get through the following array. We will see the differents ways to do it.

let myNumbers = [1,2,3,4,5,6,7,8,9,10];



// 1.) The next is is a bad example because we are changing the original array and it's not functional programing. We need to know the lenght and the position to make this way. We will transform the function in the nex steps.

/*
const getPairNumbers = () => {
  let pairNumbers = [];
  for (let i = 0; i < myNumbers.length; i++) {
    if(myNumbers[i] % 2 == 0) {
      pairNumbers.push(myNumbers[i]);
    }
  };
  myNumbers = pairNumbers;
}

getPairNumbers();

console.log(myNumbers);
*/


// 2.) This is a declarative approach. Now we are not changing the original array and also we return and independent array with two differents pure functions.

/* const filterNumbers = (predicate, numbers) => {
  let pairNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if(predicate (numbers[i])) {
      pairNumbers.push(numbers[i]);
    }
  };
  return pairNumbers;
}

const isPair = number => number % 2 === 0;

console.log(filterNumbers(isPair, myNumbers));

*/

// 3.) We can also use imperative programming with the method filter() for get a cleanest code.

let pairNumbers = myNumbers.filter(number => number % 2 == 0);

console.log(pairNumbers);

// We have also other methods of imperative programming like map(), reduce(), split() and splice() and combine them like this.

let SumSinceFour = myNumbers.filter(number => number > 4)
                            .reduce((x,y) => x+y);

console.log(SumSinceFour);

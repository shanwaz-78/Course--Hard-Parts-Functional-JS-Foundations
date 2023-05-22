// Pure Functions => pure functions is a function that produce output for their inputs only and he doesn't modifies the any externel state. that's called pure functions. 
        // For Example.

function addTwo(a,b) {
  return a + b;
};

// Impure Functions is inverse of the pure functions.
        // For Example.

let result = 0;

function addToResult(value) {
  result += value;
  return result;
};

// Here he modifies the externel state that's our impure Functions.

// Function Composition => function composition is a fundamental concept we combine two or more functions and create a new function and output of a function becomes the input of the next function.
          // For Example.

function addTwo(x) {
  return x + 2;
};

function multiply_by2(x) {
  return x * 2;
};

function divide_by2(x) {
  return x / 2;
}

const combinedFunc = divide_by2(multiply_by2(addTwo(10)));
console.log(combinedFunc) // -> 12

// Function Composition is extremely useful in functional programming.
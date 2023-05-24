function functionCreator() {
  const couter = 0;
  function add3(num) {
    const resuult = 3 + num;
    return resuult;
  }
  return add3;
}

const generatedFunc = functionCreator();
console.log(generatedFunc(10)); // -> 13

// So First we declare a functionCreator() and the entie function will store in the global memory. then we declare a generatedFunc and execute the function (functionCreator()) and he will make a new execution context and in the local memory he willl store the first counter and he's value 0 after that he will store the entire function add3() and then we returning out the add3() and the local memory of the functionCreator() will remove and he will store in the generatedFunc() the reatured functin add3() then we call it and then he will look for the add3() because we stored the add3() in generatedFunc() but he will not directly look back in the functionCreator() whenever we execute a function they store in the heap first then they store in the local memory so first he will look for add3() in the global memory and every global memory has access to that heap so first he will find in global memory in the global memory we was stored the functionCreaotr() and will go through that global into the heap and found there our add3() and we will make execution context of add3() and we will continue our exexuting..... so that's our closure working under the hood.
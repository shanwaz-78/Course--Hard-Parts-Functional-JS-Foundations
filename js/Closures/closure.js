function functionCreator() {
  const couter = 0;
  function add3(num) {
    const resuult = 3 + num;
    return resuult;
  };
  return add3;
};

const generatedFunc = functionCreator();
console.log(generatedFunc(10)); // -> 13
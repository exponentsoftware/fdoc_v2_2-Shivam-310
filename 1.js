function createNumberObjects(numbers) {
    return numbers.map((number) => {
      return {
        number: number,
        isEven: number % 2 === 0,
        double: number * 2
      };
    });
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numberObjects = createNumberObjects(numbers);
  console.log(numberObjects);

  

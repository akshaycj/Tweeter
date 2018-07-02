Promise.resolve(1)     //return 1 to the then statement
  .then(y => y + 1)     //returns y+1 which is 2 to the next then
  .then(y => {
    throw new Error("Error"); //Throws an error
  })
  .catch(() => 1)         ///catches the error and returns 1 to next then
  .then(y => y + 1)      // returns y+1 = 2
  .then(y => console.log(y)) //logs 2
  .catch(console.error); //not executed

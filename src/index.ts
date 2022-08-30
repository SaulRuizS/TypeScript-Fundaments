(() => {
  //Union Types
  let userID: string | number;
  //The | pipe symbol allows you to unite two or more types.
  function greeting(user: string | number) {
    userID = user;
    console.log('Hello user ' + userID);
  }
  greeting('littlefinger');
  greeting(117);

  //Alias
  type Age = number | string;
  function sayAge(currentAge?: Age) {
    //When adding ? to a parameter, this becomes optional.
    console.log('Your age is ' + currentAge);
  }
  sayAge(16);
  sayAge('19');

  //Literal Types
  //let size: 'S' | 'M' | 'L' | 'XL'; or
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let size: Sizes;
  size = 'L';
  //size = 's'; The type is case sensitive, so this results in error.
  size = 'S';
})();

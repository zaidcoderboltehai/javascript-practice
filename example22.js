// Promise Chaining

// 1. Function jo number ko double karke promise return karega
function doubleNumber(num) {
  return new Promise((resolve) => {
    resolve(num * 2);
  });
}

// 2. Sequential chaining karte hain
doubleNumber(5)
  .then(result => {
    console.log(`First result: ${result}`); // 10
    return doubleNumber(result);            // agla promise return
  })
  .then(secondResult => {
    console.log(`Second result: ${secondResult}`); // 20
    return doubleNumber(secondResult);
  })
  .then(thirdResult => {
    console.log(`Third result: ${thirdResult}`);  // 40
  })
  .catch(err => {
    console.error(`Error : ${err}`);
  });

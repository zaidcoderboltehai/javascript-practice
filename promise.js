function makeCoffee() {
  return new Promise((resolve, reject) => {
    console.log("1. Starting coffee preparation...");
    // Yahan promise create ho raha hai – jab coffee ready hogi toh resolve, warna reject

    setTimeout(() => {
      const success = true;          // Change to false to simulate failure

      if (success) {
        resolve("2. Coffee is ready!");
        // Promise resolved – success message pass kiya
      } else {
        reject("2. Coffee failed 😢");
        // Promise rejected – error message pass kiya
      }
    }, 1000);
    // 1000 milliseconds (1 second) delay – coffee banne mein time laga rahe hain
  });
}

makeCoffee()
  .then(msg => {
    console.log(msg);
    // Agar promise resolve hua, yeh success message yahan milega

    console.log("3. Now enjoying my coffee");
    // Success ke baad coffee enjoy karne ka message
  })
  .catch(err => {
    console.log(err);
    // Agar promise reject hua, yahan error message milega
  });

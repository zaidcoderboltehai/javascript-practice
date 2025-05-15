// Basic Promise with setTimeout

// 1. Promise create kar rahe hain jo 1s baad resolve hoga
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;             // yahan decide karo true/false
    if (success) {
      resolve("Work is completed!");       // promise fulfilled
    } else {
      reject("Something is wrong."); // promise rejected
    }
  }, 1000);
});

// 2. Promise consume karte hain
myPromise
  .then(message => {
    console.log(`Success: ${message}`);  // Jab resolve ho
  })
  .catch(error => {
    console.log(`Error: ${error}`);      // Jab reject ho
  });

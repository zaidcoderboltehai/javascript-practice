// 4. Anonymous Function (as callback)

setTimeout(
  function() {                      // 1. function() { … } → callback function define kar rahe hain, jiska koi naam nahi hai
    console.log("This printed after 1 second");  
    // 2. Jab delay complete ho jaayega, yeh line console pe print hogi
  },
  1000                              // 3. 1000 milliseconds (1 second) ka delay specify kar rahe hain
);

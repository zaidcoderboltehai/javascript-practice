function makeTea(callback) {
  console.log("1. Starting tea preparation...");  
  // Yeh line turant chalegi, batati hai ki chai banana shuru ho gaya hai

  setTimeout(() => {
    console.log("2. Tea is ready!");               
    // 1 second baad yeh message print hoga, matlab chai ready hai

    callback();                                   
    // Callback function ko call kar rahe hain – yani chai peene ka hissedaar ab chalega
  }, 1000);                                       
  // 1000 milliseconds (1 second) ka delay set kiya hai
}

makeTea(() => {
  console.log("3. Enjoying the tea");            
  // Jab callback chalega, yeh line print hogi – ab chai peene ka scene shuru
});

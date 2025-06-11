function fetchData(callback) {           // 1. fetchData naam ka function bana rahe hain, ek argument 'callback' lega
  setTimeout(() => {                    // 2. setTimeout se delay wala asynchronous task simulate kar rahe hain
    callback("Data received");          // 3. Delay ke baad callback function ko call kar rahe hain, aur message pass kar rahe
  }, 500);                              // 4. 500 milliseconds (0.5 second) ka delay set kiya hai
}                                        // 5. fetchData function definition yahin khatam hoti hai

fetchData((msg) => {                     // 6. fetchData call kar rahe hain, ek anonymous function (callback) pass kar rahe
  console.log(msg);                     // 7. Jab callback chalega, 'msg' value console pe print hogi
});                                      // 8. Is se output milega: "Data mil gaya" after 0.5 second

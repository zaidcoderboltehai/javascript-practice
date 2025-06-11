function bakeCake() {
  return new Promise(resolve => {
    console.log("1. Starting cake baking...");
    // Promise create ho raha hai – cake bake karna async task hai

    setTimeout(() => {
      resolve("2. Cake is baked!");
      // 1 second ke baad promise resolve kar rahe hain with success message
    }, 1000);
    // 1000 milliseconds (1 second) delay set kiya hai
  });
}

async function enjoyDessert() {
  console.log("3. Order placed, waiting for cake...");
  // Synchronous log – order place hone pe turant print hoga

  const result = await bakeCake();
  // bakeCake() promise return karta hai, await se yahin ruk jayega
  // Jab promise resolve hoga, result mein message mil jayega

  console.log(result);
  // "2. Cake is baked!" message print karega

  console.log("4. Now enjoying my cake");
  // Cake milne ke baad ye final message turant print hoga
}

enjoyDessert();
// enjoyDessert async function ko call kiya – sari steps sequentially async manner mein chalengi

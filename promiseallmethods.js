// 1. Promise.all()
// Sab promises ek saath chalayega. Agar sab resolve, tab .then; agar ek bhi reject, tab .catch
const p1 = Promise.resolve("Shoes delivered");
const p2 = Promise.resolve("Watch delivered");
const p3 = Promise.resolve("Bag delivered");

Promise.all([p1, p2, p3])
  .then(results => {
    // Jab sab promises resolve ho gaye
    console.log("All items:", results);
  })
  .catch(err => {
    // Agar koi ek bhi promise reject hua
    console.log("Order failed:", err);
  });


// 2. Promise.allSettled()
// Saare promises chalayega, chahe resolve ho ya reject. Har ek ka status dega
const p4 = Promise.resolve("Task 1 OK");
const p5 = Promise.reject("Task 2 Failed");
const p6 = Promise.resolve("Task 3 OK");

Promise.allSettled([p4, p5, p6])
  .then(results => {
    // Yahan har promise ka status + value/reason milega
    console.log("All settled:", results);
  });


// 3. Promise.race()
// Jo pehla resolve/reject hoga, usi ka result milega
const r1 = new Promise(res => setTimeout(() => res("Fast success"), 500));
const r2 = new Promise(res => setTimeout(() => res("Slow success"), 1000));

Promise.race([r1, r2])
  .then(first => {
    // Pehla complete hone wala promise ka result
    console.log("First response:", first);
  });


// 4. Promise.any()
// Pehla resolve hone wala promise return karega; agar sab reject, tab AggregateError
const a1 = Promise.reject("Error A1");
const a2 = Promise.resolve("A2 success");
const a3 = Promise.reject("Error A3");

Promise.any([a1, a2, a3])
  .then(winner => {
    // Pehla resolve hua promise
    console.log("Got result from:", winner);
  })
  .catch(err => {
    // Agar sab reject ho gaye
    console.log("All promises failed:", err);
  });


// 5. Promise.resolve()
// Turant resolved promise banata hai
Promise.resolve("Instant Success")
  .then(msg => {
    // Yeh turant chalega
    console.log("Resolved:", msg);
  });


// 6. Promise.reject()
// Turant rejected promise banata hai
Promise.reject("Instant Failure")
  .catch(err => {
    // Yeh turant catch block mein ayega
    console.log("Rejected:", err);
  });

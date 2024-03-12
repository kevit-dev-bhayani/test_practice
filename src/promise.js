// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = false;
//     if (success) {
//       resolve("Operation succeeded!");
//     } else {
//       reject(new Error("Operation failed!"));
//     }
//   }, 2000);
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Promise settled, regardless of outcome.");
//     // Perform cleanup operations or other tasks here
//   })
//   .then(() => {
//     console.log("after finally");
//   });

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 resolved");
//   }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("Promise 3 rejected"));
//   }, 2500);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values); // Output: ["Promise 1 resolved", "Promise 2 resolved"]
//   })
//   .catch((error) => {
//     console.error(error); // Output: Error: Promise 3 rejected
//   });

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise 2 rejcts");
//   }, 1000);
// });

// Promise.race([promise1, promise2])
//   .then((value) => {
//     console.log(value); // Output: Promise 2 resolved
//   })
//   .catch((error) => {
//     console.error(error, "catch"); // This won't be executed
//   });

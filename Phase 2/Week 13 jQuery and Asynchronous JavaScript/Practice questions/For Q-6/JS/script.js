// Q-1
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise

  .then(function () {
    console.log("Success 1");
  })

  .then(function () {
    console.log("Success 2");
  })

  .then(function () {
    console.log("Success 3");
  })

  .catch(function () {
    console.log("Error 1");
  })

  .then(function () {
    console.log("Success 4");
  });

// What is the output of the code above ?
// Error 1
// Success 4

// Q-2
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise_2 = job(true);

promise_2

  .then(function (data) {
    console.log(data);

    return job(false);
  })

  .catch(function (error) {
    console.log(error);

    return "Error caught";
  })

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    console.log(error);
  });

// What is the output of the code above?
// success
// error
// Error caught

// Q-3
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise_3 = job(true);

promise_3

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }

    return job(true);
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.log(error);

    return job(false);
  })

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    console.log(error);

    return "Error caught";
  })

  .then(function (data) {
    console.log(data);

    return new Error("test");
  })

  .then(function (data) {
    console.log("Success:", data.message);
  })

  .catch(function (data) {
    console.log("Error:", data.message);
  });


  // What is the output of the code above?
// success
// Defeat
// error
// Error caught
// Success: test
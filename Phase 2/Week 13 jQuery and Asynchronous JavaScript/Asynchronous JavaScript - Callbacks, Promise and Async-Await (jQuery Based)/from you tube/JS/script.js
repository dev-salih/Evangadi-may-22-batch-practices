// // Synchronous JS example

//     console.log(" I ");

//     console.log(" eat ");

//     console.log(" Ice Cream ");

// // Asynchronous JS example

//   console.log("I");

//   // This will be shown after 2 seconds

//   setTimeout(()=>{
//     console.log("eat");
//   },2000)

//   console.log("Ice Cream");

// ===============================================
// =                                             =
// =          1) Callbacks in JavaScript         =
// =                                             =
// ===============================================

  // is just calling a function inside another function as an argument.
  // // EX: 1
  // function one(call_two) {
  //   console.log("step 1 completed: please call step 2");
  //   call_two();
  // }
  // function two() {
  //   console.log("step 2")
  // }
  // one(two);


// ===============================================
// =                                             =
// =          2) Promises in JavaScript          =
// =                                             =
// ===============================================

  // As the charts show, a promise has three states:

    // Pending: This is the initial stage. Nothing happens here. Think of it like this, your customer is taking their time giving you an order. But they haven't ordered anything yet.

    // Resolved: This means that your customer has received their food and is happy.

    // Rejected: This means that your customer didn't receive their order and left the restaurant.


  // We need to understand four more things first ->

    // Relationship between time and work
    // Promise chaining
    // Error handling
    // The .finally handler

    // see the code down 👇👇👇( 2) using << Promise >> )


// ===============================================
// =                                             =
// =      3) Async / Await  in JavaScript        =
// =                                             =
// ===============================================

// This is supposed to be the better way to write promises and it helps us keep our code simple and clean.

// All you have to do is write the word async before any regular function and it becomes a promise.

// EX: 
function toppings_choice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping would you love?"));
    }, 3000);
  });
}

async function kitchens() {
  console.log("A");
  console.log("B");
  console.log("C");

  await toppings_choice();

  console.log("D");
  console.log("E");
}

kitchens();
console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking orders");

// ***************************************
// *                                  
// *     EX:  (Ice Cream production)
// *
// ***************************************
  

// #########################################
// #                                       #
// #   1) using <<<< Call Back >>>>        #
// #                                       #
// ########################################

  let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };


  // 1st Function

  // let order = (fruit_name, call_production) =>{

  //   setTimeout(function(){

  //     console.log(`${stocks.Fruits[fruit_name]} was selected`)
  //     // Order placed. Call production to start
  //     call_production();

  //   },2000)
  // };

  // // 2nd Function

  // let production = () =>{

  //   setTimeout(()=>{
  //     console.log("production has started")

  //     setTimeout(()=>{
  //       console.log("The fruit has been chopped")

  //       setTimeout(()=>{
  //         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)

  //         setTimeout(()=>{
  //           console.log("start the machine")

  //           setTimeout(()=>{
  //             console.log(`Ice cream placed on ${stocks.holder[1]}`)
              
  //             setTimeout(()=>{
  //               console.log(`${stocks.toppings[0]} as toppings`)

  //               setTimeout(()=>{
  //                 console.log("serve Ice cream")
  //               },2000)
  //             },3000)

  //           },2000)

  //         },1000)

  //       },1000)

  //     },2000)

  //   },0000)

  // };


  // order(0, production);


// #########################################
// #                                       #
// #    2) using <<<< Promise >>>>         #
// #                                       #
// #########################################
  
  // let stocks = {
  //   Fruits: ["strawberry", "grapes", "banana", "apple"],
  //   liquid: ["water", "ice"],
  //   holder: ["cone", "cup", "stick"],
  //   toppings: ["chocolate", "peanuts"],
  // };

  let is_shop_open = false;

  let order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (is_shop_open) {
        setTimeout(() => {
          // work is 👇 getting done here
          resolve(work());

          // Setting 👇 time here for 1 work
        }, time);
      } else {
        reject(console.log("Our shop is closed"));
      }
    });
  };

  // // step 1
  // order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  //   // step 2
  //   .then(() => {
  //     return order(0000, () => console.log("production has started"));
  //   })

  //   // step 3
  //   .then(() => {
  //     return order(2000, () => console.log("Fruit has been chopped"));
  //   })

  //   // step 4
  //   .then(() => {
  //     return order(1000, () =>
  //       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`),
  //     );
  //   })

  //   // step 5
  //   .then(() => {
  //     return order(1000, () => console.log("start the machine"));
  //   })

  //   // step 6
  //   .then(() => {
  //     return order(2000, () =>
  //       console.log(`ice cream placed on ${stocks.holder[1]}`),
  //     );
  //   })

  //   // step 7
  //   .then(() => {
  //     return order(3000, () =>
  //       console.log(`${stocks.toppings[0]} as toppings`),
  //     );
  //   })

  //   // Step 8
  //   .then(() => {
  //     return order(2000, () => console.log("Serve Ice Cream"));
  //   })

  //   // when our original promise is rejected we use .catch()
  //   .catch(() => {
  //     console.log("Customer left");
  //   })

  //   // There's something called the finally handler which works regardless of whether our promise was resolved or rejected.
  //   // For example: whether we serve no customers or 100 customers, our shop will close at the end of the day

  //   .finally(() => {
  //     console.log("end of day");
  //   });

// #########################################
// #                                       #
// #     3) using << Asynch Await >>       #
// #                                       #
// #########################################

  // let stocks = {
  //   Fruits: ["strawberry", "grapes", "banana", "apple"],
  //   liquid: ["water", "ice"],
  //   holder: ["cone", "cup", "stick"],
  //   toppings: ["chocolate", "peanuts"],
  // };

  // let is_shop_open = true;

    // We're gonna create two functions ->
      // kitchen: to make ice cream
      // time: to assign the amount of time each small task will take.

  // function time(ms) {
  //   return new Promise((resolve, reject) => {
  //     if (is_shop_open) {
  //       setTimeout(resolve, ms);
  //     } else {
  //       reject(console.log("Shop is closed"));
  //     }
  //   });
  // }

  // async function kitchen() {
  //   try {
  //     await time(2000);
  //     console.log(`${stocks.Fruits[0]} was selected`);

  //     await time(0);
  //     console.log("production has started");

  //     await time(2000);
  //     console.log("fruit has been chopped");

  //     await time(1000);
  //     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

  //     await time(1000);
  //     console.log("start the machine");

  //     await time(2000);
  //     console.log(`ice cream placed on ${stocks.holder[1]}`);

  //     await time(3000);
  //     console.log(`${stocks.toppings[0]} as toppings`);

  //     await time(2000);
  //     console.log("Serve Ice Cream");
  //   } catch (error) {
  //     console.log("customer left");
  //   }
  // }

  // kitchen();

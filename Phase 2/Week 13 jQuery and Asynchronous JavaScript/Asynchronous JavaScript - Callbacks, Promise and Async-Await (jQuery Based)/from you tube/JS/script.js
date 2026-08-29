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



// ***************************************
// *                                  
// *     EX: 2 (Ice Cream production)
// *
// ***************************************
  

  // 1) using <<<< Call Back >>>>

  let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };


  // 1st Function

  let order = (fruit_name, call_production) =>{

    setTimeout(function(){

      console.log(`${stocks.Fruits[fruit_name]} was selected`)
      // Order placed. Call production to start
      call_production();

    },2000)
  };

  // 2nd Function

  let production = () =>{

    setTimeout(()=>{
      console.log("production has started")

      setTimeout(()=>{
        console.log("The fruit has been chopped")

        setTimeout(()=>{
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)

          setTimeout(()=>{
            console.log("start the machine")

            setTimeout(()=>{
              console.log(`Ice cream placed on ${stocks.holder[1]}`)
              
              setTimeout(()=>{
                console.log(`${stocks.toppings[0]} as toppings`)

                setTimeout(()=>{
                  console.log("serve Ice cream")
                },2000)
              },3000)

            },2000)

          },1000)

        },1000)

      },2000)

    },0000)

  };


  // order(0, production);



  // 1) using <<<< Promise >>>>


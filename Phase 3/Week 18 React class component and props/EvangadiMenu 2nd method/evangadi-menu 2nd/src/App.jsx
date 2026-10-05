import "./App.css";
import FoodItems from "./components/FoodItems/FoodItems";
import Header from "./components/Header/Header";
import menu from "./commonResource/data";

function App() {
  return (
    <>
      {/* <div className="all-container"> */}
        <Header />

        {/* 1) using replicating the components */}

        {/* <FoodItems
          imgUrl="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
          title="TIMATIM SELAXA (ቲማቲም ሰላጣ)"
          price="$5.99"
          disc="Timatim Salata refers to a type of fresh Ethiopian tomato salad
            that’s also popular in Eritrea. It’s made with diced tomatoes,
            minced onions, and finely chopped peppers dressed with a mixture of
            berbere spices, olive oil, vinegar, and lemon juice."
        />
        <FoodItems
          imgUrl="https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280"
          title=""
          price=""
          disc=""
        />
        <FoodItems imgUrl="" title="" price="" disc="" />
        <FoodItems imgUrl="" title="" price="" disc="" />
        <FoodItems imgUrl="" title="" price="" disc="" />
        <FoodItems imgUrl="" title="" price="" disc="" /> */}

        {/* 2) using Array's map() method */}

        {/* {menu.map((singleItem, i) => {
          // console.log(singleItem);
          return (
            <FoodItems
              key={i}
              imgUrl={singleItem.img}
              title={singleItem.title}
              price={singleItem.price}
              desc={singleItem.desc}
            />
          );
        })} */}

        {/* 3) using destructuring */}

        <div className="foods-container">
          {menu.map(({ img, title, price, desc }, i) => {
            // console.log(singleItem);
            return (
              <FoodItems
                key={i}
                imgUrl={img}
                title={title}
                price={price}
                desc={desc}
              />
            );
          })}
        </div>
      {/* </div> */}
    </>
  );
}

export default App;

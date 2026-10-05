import "./App.css";
import FoodItem from "./FoodItem/FoodItem";
import Header from "./Header/Header";
import menu from "./commonResource/data.js";

function App() {
  return (
    <>
      <div className="all-container">
        <Header />
        <div className="foods-container">
          {menu.map(({ img, title, price, desc }, i) => {
            return (
              <FoodItem
                key={i}
                imgUrl={img}
                title={title}
                price={price}
                desc={desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

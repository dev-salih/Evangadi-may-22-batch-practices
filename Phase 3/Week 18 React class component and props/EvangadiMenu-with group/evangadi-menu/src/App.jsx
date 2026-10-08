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
          {menu.map((product, i) => { 
            return (
              <FoodItem
                key={i}
                data={product}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

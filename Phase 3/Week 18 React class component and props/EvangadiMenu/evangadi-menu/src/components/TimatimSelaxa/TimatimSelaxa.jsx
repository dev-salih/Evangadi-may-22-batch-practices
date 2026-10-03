import { Component } from 'react'
import FoodItem from '../FoodItem/FoodItem';

export class TimatimSelaxa extends Component {
  render() {
    return (
      <>
        <FoodItem
          img="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
          title="TIMATIM SELAXA (ቲማቲም ሰላጣ)"
          price="5.99$"
          disc="Timatim Salata refers to a type of fresh Ethiopian tomato salad that’s also popular in Eritrea. It’s made with diced tomatoes, minced onions, and finely chopped peppers dressed with a mixture of berbere spices, olive oil, vinegar, and lemon juice."
        />
      </>
    );
  }
}

export default TimatimSelaxa


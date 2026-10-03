import { Component } from 'react'
import FoodItem from '../FoodItem/FoodItem';

export class Kitfo extends Component {
  render() {
    return (
      <>
        <FoodItem
          img="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp"
          title="Kitfo"
          price="25.99$"
          disc="Made from the leanest meat, kitfo is viewed as a big treat by ordinary Ethiopians, while its nutritional powers are also praised. Similar to French steak tartare, the meat is minced and warmed in a pan with a little butter, mitmita (a stronger version of berbere) and sometimes thyme. Kitfo is typically served leb leb (warmed, not cooked), though you can ask for it to be betam leb leb (“very warmed,” which basically means cooked)."
        />
      </>
    );
  }
}

export default Kitfo

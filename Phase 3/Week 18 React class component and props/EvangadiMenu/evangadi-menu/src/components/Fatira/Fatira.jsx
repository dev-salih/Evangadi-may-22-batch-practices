import { Component } from 'react'
import FoodItem from '../FoodItem/FoodItem'

export class Fatira extends Component {
  render() {
    return (
      <>
        <FoodItem
          img="https://cdn.tasteatlas.com//images/dishes/f99dcc3dfcc642348a40b19f51f32b74.jpg?w=905&h=510"
          title="FATIRA (ፈጢራ)"
          price="18.99$"
          disc="Fatira is a traditional Ethiopian street food item that is commonly consumed for breakfast, consisting of a large, crispy, wheat flour pancake. It is traditionally served with scrambled eggs, honey, or both. Fatira is often cut into smaller pieces, and it is especially popular during Eid-al-Fitr in Ethiopia."
        />
      </>
    );
  }
}

export default Fatira


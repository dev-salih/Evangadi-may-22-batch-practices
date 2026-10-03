import { Component } from 'react'
import FoodItem from '../FoodItem/FoodItem'

export class Kinche extends Component {
  render() {
    return (
      <>
        <FoodItem
          img="https://cdn.tasteatlas.com//images/dishes/5746f1c174664a01990eb04377c9228a.jpg?w=905&h=510"
          title="KINCHE (ቂንጬ)"
          price="7.99 $"
          disc="Simple, nutritious, and inexpensive, kinche is an Ethiopian breakfast staple made with cracked wheat that is boiled in either water or milk. The best way to describe kinche would be as the Ethiopian equivalent of oatmeal. After it has been cooked, kinche is added to the pan with either clarified spiced butter known as niter qibe or with oil and fried onions, although kinche can also be consumed without any flavorings."
        />
      </>
    );
  }
}

export default Kinche

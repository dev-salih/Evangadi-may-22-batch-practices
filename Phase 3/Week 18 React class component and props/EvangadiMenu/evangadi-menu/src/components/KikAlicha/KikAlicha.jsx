import  { Component } from 'react'
import FoodItem from '../FoodItem/FoodItem'

export class KikAlicha extends Component {
  render() {
    return (
      <>
        <FoodItem
          img="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kik-alicha.jpg.webp"
          title="KIK ALICHA (ክክ አልጫ)"
          price="12.99$"
          disc="If you don’t have a high tolerance for spicy food, then you’re going to be thankful for kik alicha. It refers to an Ethiopian lentil stew made from split peas, niter kibbeh, and turmeric. Unlike many of the dishes in this Ethiopian food guide, it isn’t made with any berbere so it isn’t nearly as spicy as dishes like doro wat and siga wat.Kik alicha is a mildly flavored stew made with yellow split peas simmered with garlic, onions, ginger, turmeric, and niter kibbeh. It’s a popular type of vegetarian stew that’s often served as part of a combination platter. Like any wat, it’s best enjoyed with injera."
        />
      </>
    );
  }
}

export default KikAlicha

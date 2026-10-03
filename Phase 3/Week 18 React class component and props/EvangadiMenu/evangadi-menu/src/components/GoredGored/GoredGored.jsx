import { Component } from 'react'
import FoodItem from '../FoodItem/FoodItem'

export class GoredGored extends Component {
  render() {
    return (
      <>
        <FoodItem
          img="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo-gored.jpg.webp"
          title="GORED GORED (ጎረድ ጎረድ)"
          price="28.99$"
          disc="If kitfo piqued your interest, then you may want to try gored gored as well. It’s a similar dish to kitfo except it’s made with cubes of raw beef – usually tenderloin or round steak – seasoned with niter kibbeh, mitmita, berbere, and awaze (chili mustard sauce). Like kitfo, it’s usually served with injera."
        />
      </>
    );
  }
}

export default GoredGored

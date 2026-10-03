import { Component } from 'react'
import FoodItem from '../FoodItem/FoodItem';

export class Tibs extends Component {
  render() {
    return (
      <>
        <FoodItem
          img="https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280"
          title="TIBS (ጥብስ)"
          price="22.99$"
          disc="Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is one of the most popular dishes among Ethiopians. It comes in a variety of forms, varying in type, size or shape of the cuts of meat used, and can range from hot to mild or contain little to no vegetables. A particularly recommended variation is shekla tibs, in which the strips of meat arrive at your table roasting atop a clay pot stoked with hot coals – dramatic and delicious."
        />
      </>
    );
  }
}

export default Tibs
import { Component } from 'react'
import './FoodItems.css'

export class FoodItems extends Component {
  render() {
    let {imgUrl, title, price, desc} = this.props;
    return (
      <>
        <div className="foods-container">
          <div className="single-food">
            <div className="img">
              <img src={imgUrl} />
            </div>
            <div className="title-price">
              <h3>{title}</h3>
              <p>{price}</p>
            </div>
            <div className="food-desc">{desc}</div>
          </div>
        </div>
      </>
    );
  }
}

export default FoodItems

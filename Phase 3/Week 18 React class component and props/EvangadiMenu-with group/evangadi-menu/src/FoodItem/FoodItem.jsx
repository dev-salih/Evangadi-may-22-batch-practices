import  { Component } from 'react'
import './FoodItem.css'

export class FoodItem extends Component {
  render() {
    let { imgUrl, title, price, desc } = this.props;
    return (
      <>
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
      </>
    );
  }
}

export default FoodItem

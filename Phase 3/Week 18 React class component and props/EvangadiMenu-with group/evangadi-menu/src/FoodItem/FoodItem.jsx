import  { Component } from 'react'
import './FoodItem.css'

export class FoodItem extends Component {
  render() {
    let { img, title, price, desc , link} = this.props.data;
    return (
      <>
        <div className="single-food">
          <div className="img">
            <img src={img} />
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
          <div className="food-desc">{desc}</div>
          {link && (
            <div>
              <p>{link}</p>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default FoodItem

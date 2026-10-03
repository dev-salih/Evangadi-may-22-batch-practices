import { Component } from "react";
import FoodItem from "../FoodItem/FoodItem";

export class Genfo extends Component {
  render() {
    return (
      <>
        <FoodItem
          img="https://cdn.tasteatlas.com//images/dishes/d64fe1f3c3754340bfbc7e20510110ef.jpg?w=905&h=510"
          title="GENFO (ገንፎ)"
          price="20.99 $"
          disc="Genfo is a simple Ethiopian porridge that is commonly consumed for breakfast, made by adding dry-roasted barley flour to boiling water and stirring the concoction with a wooden utensil until it develops a smooth, yet extremely thick consistency."
        />
      </>
    );
  }
}

export default Genfo;
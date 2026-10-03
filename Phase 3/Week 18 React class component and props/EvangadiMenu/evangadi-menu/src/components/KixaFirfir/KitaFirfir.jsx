import  { Component } from 'react'
import FoodItem from '../FoodItem/FoodItem'

export class KitaFirfir extends Component {
  render() {
    return (
      <>
        <FoodItem
          img="https://cdn.tasteatlas.com//images/dishes/685b5e5b70b441a7a4e7279a43a89333.jpg?w=905&h=510"
          title="KIXA FIR-FIR (ቂጣ ፍር ፍር)"
          price="15.99$"
          disc="Kixa fir-fir is a fit-fit variety prepared with a combination of torn pieces of kitcha flatbread, clarified butter, and berbere spices. The dish is traditionally served for breakfast, when it’s accompanied by plain yogurt. Unlike most Ethiopian dishes, kitcha fit-fit is typically consumed with a spoon instead of using the right hand."
        />
      </>
    );
  }
}

export default KitaFirfir

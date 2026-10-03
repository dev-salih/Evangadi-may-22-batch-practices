import { Component } from 'react'
import style from './Header.module.css'

export class Header extends Component {
  render() {
    return (
      <>
        <header className={style.title}>
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
      </>
    );
  }
}

export default Header

import {useState} from 'react'
import './ThemeToggle.css'

function ThemeToggle() {
  const [color, setColor] = useState(0);
  return (
    <>
      <div>
        <div className='container'>
          <h2>Theme Toggle App</h2>
          <button>switch to {} mode</button>
        </div>
      </div>
    </>
  )
}

export default ThemeToggle

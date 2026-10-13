import {useState} from 'react'
import './ThemeToggle.css'

function ThemeToggle() {

  const [IsDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!IsDark);
  }
  return (
    <>
      <div className={`app ${(IsDark) ? "dark" : "light"}`}>
        <div className='container'>
          <h2>Theme Toggle App</h2>
          <button onClick={toggleTheme}>{IsDark ? "switch to light mode" : "switch to dark mode"}</button>
        </div>
      </div>
    </>
  )
}

export default ThemeToggle

import {useState} from 'react'
import './ThemeToggle.css'

function ThemeToggle() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <>
      <div className={`app ${(isDarkMode) ? "dark" : "light"}`}>
        <div className='container'>
          <h2>Theme Toggle App</h2>
          <button onClick={toggleTheme}>{isDarkMode ? "switch to light mode" : "switch to dark mode"}</button>
        </div>
      </div>
    </>
  )
}

export default ThemeToggle

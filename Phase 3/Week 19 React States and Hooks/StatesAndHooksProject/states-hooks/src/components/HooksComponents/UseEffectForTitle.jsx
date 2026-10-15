import { useState, useEffect } from "react";
import "./UseEffectForTitle.css";

function UseEffectForTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Component is mounted");
  });
  // 1. Effect for the mount alert message (runs only once when the component mounts)
  // useEffect(() => {
  //   alert("Component is mounted");
  // }, []);

  // 2. Effect to update the document title whenever the count changes
  // useEffect(() => {
  //   document.title = `TitleCount: ${count}`;
  // }, [count]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="title-count-container">
      <button onClick={handleClick}>Click here</button>
      <h2>Count displayer: {count}</h2>
    </div>
  );
}

export default UseEffectForTitle;

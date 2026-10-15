import { useState } from "react";
import style from './IncreaseDecreaseCount.module.css'

function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    setCount(0);
  };

  const decreaseCount = () => {
    setCount((count) => count - 1);
  };

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <p className={style.para}>Initial count: {count}</p>
      <button className={style.btn} onClick={resetCount}>
        Reset Result
      </button>
      <button className={style.btn} onClick={increaseCount}>
        Increase Result
      </button>
      <button className={style.btn} onClick={decreaseCount}>
        Decrease Result
      </button>
    </>
  );
}

export default IncreaseDecreaseCount;

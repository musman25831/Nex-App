import { useEffect, useState } from "react";
import styles from "./Slider.module.scss";

const Slider = () => {
  const [counter, setCounter] = useState(1);

 
  const handleIncrement = () => {
    if (counter <= 4) {
      setCounter(counter + 1);
    }
  };
  const handleDeccrement = () => {
    if (counter >= 2) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainList}>
        {counter === 1 ? (
          <>
            <h1 className={styles.heading}>0{counter}</h1>
            <h2 className={styles.tile}>New Leagcy</h2>
            <p className={styles.wrap}>Lorem Lorem Lorem% Lorem% </p>
          </>
        ) : counter === 2 ? (
          <>
            <h1>0{counter}</h1>
            <h2>New Partial</h2>
            <p className={styles.wrap}>Lorem Lorem Lorem% Lorem% </p>

          </>
        ) : counter === 3 ? (
          <>
            <h1>0{counter}</h1>
            <h2>New Item</h2>
            <p className={styles.wrap}>Lorem Lorem Lorem% Lorem% </p>

          </>
        ) : counter === 4 ? (
          <>
            <h1>0{counter}</h1>
            <h2>New Professional</h2>
            <p className={styles.wrap}>Lorem Lorem Lorem% Lorem% </p>

          </>
        ) : (
          <>
            <h1>0{counter}</h1>
            <h2>New Customs</h2>
            <p className={styles.wrap}>Lorem Lorem Lorem% Lorem% </p>

          </>
        )}
      </div>
      <div className={styles.innerList}>
        <span onClick={handleDeccrement} className={styles.incre}>
          &lt;
        </span>
        <span className={styles.conuterSteps}>
          0{counter}/05
        </span>
        <span onClick={handleIncrement} className={styles.incre}>
          &gt;
        </span>
      </div>
    </div>
  );
};
export default Slider;

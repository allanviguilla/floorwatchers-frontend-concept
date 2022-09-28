import { useState } from 'react';
import styles from '../App.module.css'

export default function Main() {

  const [active, setActive] = useState(styles.mainPanel);

  const mainActive = active === styles.mainPanel ? styles.active : "";
  const purpleActive = active === styles.purple ? styles.active : "";
  const blueActive = active === styles.blue ? styles.active : "";
  const greenActive = active === styles.green ? styles.active : "";

  const handleClick = event => {
    if (event.target.className.includes(styles.mainPanel)) {
      setActive(styles.mainPanel)
    }
    if (event.target.className.includes(styles.purple)) {
      setActive(styles.purple)
    }
    if (event.target.className.includes(styles.green)) {
      setActive(styles.green)
    }
    if (event.target.className.includes(styles.blue)) {
      setActive(styles.blue)
    }
  }

  return (
    <main className={styles.main}>
        <div
        className={`${styles.panel} ${styles.mainPanel} ${mainActive}`}
        name="mainPanel"
        onClick={(event) => {handleClick(event)}}
        >
          <div className={!mainActive ? styles.hideMainPanel : ''}>
            <h3 className={styles.title}>Mint a Floor Watcher.</h3>
            <h3 className={styles.title}>Watch Live Sports.</h3>
            <img className={styles.pfpImg} src="https://floorwatchers.s3.amazonaws.com/FWS_fan_pfp_mar2022.png" />
          </div>
        </div>
        <div
        className={`${styles.panel} ${styles.purple} ${purpleActive}`}
        name="purple"
        onClick={(event) => {handleClick(event)}}
        >
        </div>
        <div
        className={`${styles.panel} ${styles.blue} ${blueActive}`}
        name="blue"
        onClick={(event) => {handleClick(event)}}
        ></div>
        <div
        className={`${styles.panel} ${styles.green} ${greenActive}`}
        name="green"
        onClick={(event) => {handleClick(event)}}
        ></div>
    </main>
  );
}
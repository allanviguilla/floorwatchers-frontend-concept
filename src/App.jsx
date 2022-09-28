import { useState } from 'react'

import Accents from './components/Accents.jsx';

import logo from './assets/fwsLogo.png';
import styles from './App.module.css'

export default function App() {

  const [active, setActive] = useState(styles.mainPanel);

  const showPanel = active ? "active" : '';

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

    // event.target.className.includes(styles.mainPanel) ? setActive(styles.mainPanel) :
    // event.target.className.includes(styles.purple) ? setActive(styles.purple) :
    // event.target.className.includes(styles.green) ? setActive(styles.green) :
    // event.target.className.includes(styles.blue) ? setActive(styles.blue) : null
  }

  return (
    <>
    <Accents />
    <header>
      <nav className={styles.nav}>
        <img className={styles.logo} src={logo} />
        <svg className={styles.hamburger} viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="15" fill="black"></rect>
          <rect y="30" width="100" height="15" fill="black"></rect>
          <rect y="60" width="100" height="15" fill="black"></rect>
        </svg>
      </nav>
    </header>
    <main className={styles.main}>
        <div className={`${styles.panel} ${styles.mainPanel} ${mainActive}`} name="mainPanel" onClick={(event) => {handleClick(event)}}>
          <h3 className={styles.title}>Mint a Floor Watcher.</h3>
          <h3 className={styles.title}>See Live Sports.</h3>
          <img className={styles.pfpImg} src="https://floorwatchers.s3.amazonaws.com/FWS_fan_pfp_mar2022.png" />
        </div>
        <div className={`${styles.panel} ${styles.purple} ${purpleActive}`} name="purple" onClick={(event) => {handleClick(event)}}></div>
        <div className={`${styles.panel} ${styles.blue} ${blueActive}`} name="blue" onClick={(event) => {handleClick(event)}}></div>
        <div className={`${styles.panel} ${styles.green} ${greenActive}`} name="green" onClick={(event) => {handleClick(event)}}></div>
    </main>
    </>
  )
}

{/* <img className={styles.pfpImg} src={watcher1} /> */}

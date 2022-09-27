import { useState } from 'react'

import logo from './assets/fwsLogo.png';
import watcher1 from './assets/fws-fan-male.png';
import styles from './App.module.css'

export default function App() {

  return (
    <>
    <nav className={styles.nav}>
      <img className={styles.logo} src={logo} />
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="15" fill="white"></rect>
        <rect y="30" width="100" height="15" fill="white"></rect>
        <rect y="60" width="100" height="15" fill="white"></rect>
      </svg>
    </nav>
    </>
  )
}

{/* <img className={styles.pfpImg} src={watcher1} /> */}

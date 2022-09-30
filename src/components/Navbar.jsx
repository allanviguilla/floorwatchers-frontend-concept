import logo from '../assets/fwsLogo.png';
import styles from '../App.module.css';

import discord from '../assets/discord.png';
import twitter from '../assets/twitter.png';

export default function Navbar() {

  return (
    <header>
      <nav className={styles.nav}>
        <img className={styles.logo} src={logo} />
        <svg className={styles.hamburger} viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="15" fill="black"></rect>
          <rect y="30" width="100" height="15" fill="black"></rect>
          <rect y="60" width="100" height="15" fill="black"></rect>
        </svg>
        <div className={styles.socialIcons}>
          <img src={twitter}/>
          <img src={discord} style={{paddingLeft: '1rem'}}/>
        </div>
      </nav>
    </header>
  );
}
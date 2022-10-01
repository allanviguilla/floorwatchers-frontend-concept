import React from 'react';

import twitter from '../assets/twitter_white.png';
import discord from '../assets/discord_white.png';

import styles from '../App.module.css';

export default function Mobile({ setShowMobile }) {
  return(
    <div className={styles.mobile}>
      <div className={styles.mobileNav}>
        <button
          className={styles.closeWindow}
          onClick={() => {setShowMobile(false)}}>
          <span className={styles.closeIcon}>X</span>
        </button>
      </div>
      <div className={styles.mobileBody}>
        <a href="https://medium.com/@FloorWatchersSociety/floor-watchers-society-season-1-playbook-6eca89cebcbf" target="_blank">
          <h3>Read the Whitepaper</h3>
          <a href="https://twitter.com/FloorWatchers" target="_blank"><img src={twitter} /></a>
          <a href="" target="_blank"><img src={discord} /></a>
        </a>
      </div>
    </div>
  );
}
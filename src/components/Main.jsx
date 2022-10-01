import { useState, useEffect } from 'react';
import styles from '../App.module.css'

import khalil from '../assets/khalil.png';
import sommo from '../assets/sommo.png';
import allan from '../assets/allan.png';
import juan from '../assets/juan.png';
import twitter from '../assets/twitter_white.png'

export default function Main() {

  const [active, setActive] = useState(styles.mainPanel);
  // const [windowSize, setWindowSize] = useState(getWindowSize());

  const mainActive = active === styles.mainPanel ? styles.active : "";
  const purpleActive = active === styles.purple ? styles.active : "";
  const blueActive = active === styles.blue ? styles.active : "";
  const greenActive = active === styles.green ? styles.active : "";

  const handleClick = event => {
    if (event.target.className.includes(styles.mainPanel)) {
      setActive(styles.mainPanel)
    } else if (event.target.className.includes(styles.purple)) {
      setActive(styles.purple)
    } else if (event.target.className.includes(styles.green)) {
      setActive(styles.green)
    } else if (event.target.className.includes(styles.blue)) {
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
          <div className={!mainActive ? styles.hidePanel : ''}>
            <div className={styles.centerContent}>
              <h3 className={styles.title}>Mint a Floor Watcher.</h3>
              <h3 className={styles.title}>Watch Live Sports.</h3>
            </div>
            <img className={styles.pfpImg} src="https://floorwatchers.s3.amazonaws.com/FWS_fan_pfp_mar2022.png" />
          </div>
        </div>
        <div
        className={`${styles.panel} ${styles.purple} ${purpleActive}`}
        name="purple"
        onClick={(event) => {handleClick(event)}}
        >
          <div className={!purpleActive ? styles.hidePanel : '' }>
            <div className={`${styles.roadmapGrid}`}>
              <div className={styles.roadmapTitle}>
                <h3>ROADMAP</h3>
              </div>
              <div className={styles.dao}>
                {/* DAO */}
                <img src="https://floorwatcherssociety.com/UTIL%20DAO.d6763a1c.png"/>
                <p>Following the Floor Watchers Society mint, a DAO will be formed following council elections run by the community with support from the Floor Watchers Society team. The DAO will be a community-owned and managed entity with minimal involvement from the core team. DAO funds can be directed in whichever way the DAO chooses through on-chain voting.</p>
              </div>
              <div className={styles.societyDraw}>
                {/* <h4>SOCIETY DRAW</h4> */}
                <img src="https://floorwatcherssociety.com/UTIL%20SOCIETY.f5b02669.png"/>
                <p>Floor Watchers Society’s custom on-chain program will run a drawing of NFT holders to select the package winners every week. The draw will provide transparency to the community and a more efficient experience.</p>
              </div>
              <div className={styles.brunchBets}>
                {/* <h4>BRUNCH BETS</h4> */}
                <img src="https://floorwatcherssociety.com/UTIL%20BRUNCH.2ee60a6a.png"/>
                <p>Every Friday, the community will choose between four Sunday sports bets. If the community’s selected bet wins, the Brunch Bet wallet will earn $2,000 worth of $SOL. If the bet loses, nothing happens!</p>
              </div>
              <div className={styles.drawPackage}>
                {/* <h4>DRAW PACKAGE</h4> */}
                <img src="https://floorwatcherssociety.com/UTIL%20DRAW.fb578727.png"/>
                <h5>Commissioner Package</h5>
                <p>Bi-weekly, one Floor Watchers holder will win two luxury tickets at the sporting event of the winner’s choice.</p>
                <h5>Franchise Package</h5>
                <p>Every week, five Floor Watchers holders will win two tickets at the sporting event of the winner’s choice</p>
              </div>
              <div className={styles.mysteryPackage}>
                {/* <h4>MYSTERY PACKAGE</h4> */}
                <img src="https://floorwatcherssociety.com/UTIL%20MYSTERY.d8e3ca2d.png"/>
                <p>Floor Watchers Society will purchase a luxury experience at a community-selected sporting event once a month. At least five Floor Watchers holders will win two tickets each to take advantage of this experience. The package will be announced post mint.</p>
              </div>
              <div className={styles.floor}>
                {/* <h4>FLOOR</h4> */}
                <img src="https://floorwatcherssociety.com/UTIL%20FLOOR.b62d5357.png"/>
                <p>Floor Watchers holders will be able to stake their Floor Watchers to earn $FLOOR rewards. With $FLOOR rewards, holders will be able to redeem Commissioner, Franchise, and two additional packages with a 15% discount.</p>
              </div>
            </div>
          </div>
        </div>
        <div
        className={`${styles.panel} ${styles.blue} ${blueActive}`}
        name="blue"
        onClick={(event) => {handleClick(event)}}
        >
          <div className={!blueActive ? styles.hidePanel : ''}>
            <div className={styles.faqGrid}>
              <div className={styles.faqTitle}>
                <h3>FREQUENTLY ASKED QUESTIONS</h3>
              </div>
              <div className={styles.accordion}>
                <div className={styles.item}>
                  <div className={styles.question}>
                    <h5>What is Floor Watchers Society?</h5>
                    <span>+</span>
                  </div>
                  <div className={styles.answer}>
                    <p>Floor Watchers Society is a conglomerate of real-life utility projects hosted on the Solana blockchain.</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.question}>
                    <h5>What is the total supply?</h5>
                    <span>+</span>
                  </div>
                  <div className={styles.answer}>
                    <p>3,333 Floor Watchers</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.question}>
                    <h5>Wen mint?</h5>
                    <span>+</span>
                  </div>
                  <div className={styles.answer}>
                    <p>Soon come. Sign up to the mailing list for updates.</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.question}>
                    <h5>How much will a Floor Watcher cost?</h5>
                    <span>+</span>
                  </div>
                  <div className={styles.answer}>
                    <p>The price will be $299 USD worth of $SOL the week of mint. Our team came to this price point to be able to cover the utility cost, as well as future sustainability.</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.question}>
                    <h5>How do I win tickets?</h5>
                    <span>+</span>
                  </div>
                  <div className={styles.answer}>
                    <p>Holding at least one (1) Floor Watcher in your wallet makes you eligible to win tickets. Floor Watchers cannot have their NFT listed or staked to be included in the raffle before a snapshot is taken. Additionally, Floor Watchers can use $FLOOR to redeem packages.</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.question}>
                    <h5>Does my location matter regarding tickets?</h5>
                    <span>+</span>
                  </div>
                  <div className={styles.answer}>
                    <p>In the USA, tickets must available on Ticketmaster, SeatGeek, or the Team’s official website. For Non-US Floor Watchers tickets must be available on the Team/league official website or Ticketmaster.</p>
                  </div>
                </div>
              </div>
              <div className={styles.whitepaper}>
                <h5><a href="https://medium.com/@FloorWatchersSociety/floor-watchers-society-season-1-playbook-6eca89cebcbf" target="_blank">READ THE WHITEPAPER</a></h5>
              </div>
              <div className={styles.mailingList}>
                <h5>MAILING LIST</h5>
              </div>
              <div className={styles.pfpGirl}>
                <img src="https://floorwatchers.s3.amazonaws.com/FWS_fan_pfp_bottom_mar2022.png" />
              </div>
            </div>
          </div>
        </div>
        <div
        className={`${styles.panel} ${styles.green} ${greenActive}`}
        name="green"
        onClick={(event) => {handleClick(event)}}
        >
          <div className={!greenActive ? styles.hidePanel : ''}>
            <div className={styles.teamGrid}>
                <div className={styles.teamTitle}>
                  <h3>MEET THE TEAM</h3>
                </div>
                <div className={`${styles.profile} ${styles.khalil}`}>
                  <img className={styles.teamPfp} src={khalil} />
                  <h5>Khalil</h5>
                  <h6>Head of Tech</h6>
                  <a href="https://twitter.com/khaIilnafis" target="_blank"><img className={styles.profileSocial} src={twitter} /></a>
                </div>
                <div className={`${styles.profile} ${styles.sommo}`}>
                  <img className={styles.teamPfp} src={sommo} />
                  <h5>Sommo</h5>
                  <h6>Project Manager</h6>
                  <img className={styles.profileSocial} src={twitter} />
                </div>
                <div className={`${styles.profile} ${styles.allan}`}>
                  <img className={styles.teamPfp} src={allan} />
                  <h5>Allan</h5>
                  <h6>Front-End Dev</h6>
                  <img className={styles.profileSocial} src={twitter} />
                </div>
                <div className={`${styles.profile} ${styles.juan}`}>
                  <img className={styles.teamPfp} src={juan} />
                  <h5>Juan</h5>
                  <h6>Head of Design</h6>
                  <img className={styles.profileSocial} src={twitter} />
                </div>
              </div>
          </div>
        </div>
    </main>
  );
}
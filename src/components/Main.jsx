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
              <div className={`${styles.gridColSpan4}`}>
                <h3>ROADMAP</h3>
              </div>
              <div className={`${styles.gridRowSpan2}`}>
                {/* DAO */}
                <img src="https://floorwatcherssociety.com/UTIL%20DAO.d6763a1c.png" style={{ width: '150px'}}/>
                <p>Following the Floor Watchers Society mint, a DAO will be formed following council elections run by the community with support from the Floor Watchers Society team. The DAO will be a community-owned and managed entity with minimal involvement from the core team. DAO funds can be directed in whichever way the DAO chooses through on-chain voting.</p>
              </div>
              <div className={`${styles.gridColSpan2}`}>
                {/* <h4>SOCIETY DRAW</h4> */}
                <img src="https://floorwatcherssociety.com/UTIL%20SOCIETY.f5b02669.png" style={{ width: '200px'}}/>
                <p>Floor Watchers Society’s custom on-chain program will run a drawing of NFT holders to select the package winners every week. The draw will provide transparency to the community and a more efficient experience.</p>
              </div>
              <div>
                {/* <h4>BRUNCH BETS</h4> */}
                <img src="https://floorwatcherssociety.com/UTIL%20BRUNCH.2ee60a6a.png" style={{width: '150px'}}/>
                <p>Every Friday, the community will choose between four Sunday sports bets. If the community’s selected bet wins, the Brunch Bet wallet will earn $2,000 worth of $SOL. If the bet loses, nothing happens!</p>
              </div>
              <div>
                {/* <h4>DRAW PACKAGE</h4> */}
                <img src="https://floorwatcherssociety.com/UTIL%20DRAW.fb578727.png" style={{width: '200px'}} />
                <h5>Commissioner Package</h5>
                <p>Bi-weekly, one Floor Watchers holder will win two luxury tickets at the sporting event of the winner’s choice.</p>
                <h5>Franchise Package</h5>
                <p>Every week, five Floor Watchers holders will win two tickets at the sporting event of the winner’s choice</p>
              </div>
              <div>
                {/* <h4>MYSTERY PACKAGE</h4> */}
                <img src="https://floorwatcherssociety.com/UTIL%20MYSTERY.d8e3ca2d.png" style={{ width: '200px' }} />
                <p>Floor Watchers Society will purchase a luxury experience at a community-selected sporting event once a month. At least five Floor Watchers holders will win two tickets each to take advantage of this experience. The package will be announced post mint.</p>
              </div>
              <div>
                {/* <h4>FLOOR</h4> */}
                <img src="https://floorwatcherssociety.com/UTIL%20FLOOR.b62d5357.png" style={{ width: '250px' }} />
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
        </div>
        <div
        className={`${styles.panel} ${styles.green} ${greenActive}`}
        name="green"
        onClick={(event) => {handleClick(event)}}
        ></div>
    </main>
  );
}
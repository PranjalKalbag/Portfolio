import React from "react"
import * as styles from "./Project.module.css"
import ReactCardFlip from "react-card-flip"
export default function Project() {
  return (
    <div className={styles.homediv}>
      {/* <div className={styles.heading}><h1>Some of My favourite projects</h1></div>
            <div className={styles.cardcontainer}>
                <div className={styles.cardbox}>
                    <div className={styles.card}>
                        <div className={styles.cardfront}> Project 1</div>
                        <div className={styles.cardback}> More info about project here</div>
                    </div>
                </div>
                <div className={styles.cardbox}>
                    <div className={styles.card}>
                        <div className={styles.cardfront}> Project 2</div>
                        <div className={styles.cardback}> More info about project here</div>
                    </div>
                </div>
                <div className={styles.cardbox}>
                    <div className={styles.card}>
                        <div className={styles.cardfront}> Project 3</div>
                        <div className={styles.cardback}> More info about project here</div>
                    </div>
                </div>
            </div> */}
      <div className={styles.heading}>
        <h1>Some of My favourite projects</h1>
      </div>
      <div className={styles.cardcontainer}>
        <div className={styles.cardbox}>
          <ReactCardFlip
            isFlipped={this.state.isFlipped}
            flipDirection="vertical"
          >
            <div className={styles.card}>
              This is the front of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>

            <div className={styles.card}>
              This is the back of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  )
}

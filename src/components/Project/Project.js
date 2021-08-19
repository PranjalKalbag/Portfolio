import React from "react"
import * as styles from "./Project.module.css"
import ReactCardFlipper from "react-card-flipper"
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
          <ReactCardFlipper
            className={styles.card}
            width="150px"
            height="200px"
            behavior="click"
            levitate={true}
          >
            <div className={styles.projtitle}>Project 1</div>
            <div className={styles.projcontent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </ReactCardFlipper>
        </div>
        <div className={styles.cardbox}>
          <ReactCardFlipper
            className={styles.card}
            width="150px"
            height="200px"
            behavior="click"
            levitate={true}
          >
            <div className={styles.projtitle}>Project 2</div>
            <div className={styles.projcontent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </ReactCardFlipper>
        </div>
        <div className={styles.cardbox}>
          <ReactCardFlipper
            className={styles.card}
            width="150px"
            height="200px"
            behavior="click"
            levitate={true}
          >
            <div className={styles.projtitle}>Project 3</div>
            <div className={styles.projcontent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </ReactCardFlipper>
        </div>
      </div>
    </div>
  )
}

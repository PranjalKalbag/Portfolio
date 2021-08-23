import React, {useState} from "react"
import * as styles from "./Project.module.css"
import ReactCardFlip from "react-card-flip"
export default function Project() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
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
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onClick={handleClick}
        style={{
          backgroundColor: "green",
          height: 100,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Project 1
        {/* <button onClick={handleClick}>Click to flip</button> */}
      </div>

      <div
      onClick={handleClick}
        style={{
          backgroundColor: "red",
          height: 100,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        More info about project here
        {/* <button onClick={handleClick}>Click to flip</button> */}
      </div>
    </ReactCardFlip>
      </div>
    </div>
  )
}

import React from "react"
import * as styles from "./Home.module.css"
const Home = () => {
  return (
    <div className={styles.homediv}>
      <div className={styles.statictext}> Hi, I'm Pranjal, a </div>
      <div className={styles.dynamictext}>
        <br></br>
        <br></br>
        <span className={styles.text1}>Python Developer</span>
        <span className={styles.text2}>Data Scientist</span>
      </div>
    </div>
  )
}
export default Home

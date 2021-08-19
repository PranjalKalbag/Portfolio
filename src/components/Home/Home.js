import React from "react"
import * as styles from "./Home.module.css"
import { HiArrowDown } from "@react-icons/all-files/hi/HiArrowDown"
import scrollTo from "gatsby-plugin-smoothscroll"
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
      <div className={styles.buttonclass}>
        <button onClick={() => scrollTo("#project")}>
          <span className={styles.icon}>
            <HiArrowDown size="70px" color="#a3c7cf" />
          </span>
        </button>
      </div>
    </div>
  )
}
export default Home

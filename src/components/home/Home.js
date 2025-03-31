import React from 'react'
import './Home.css'
import {motion} from 'motion/react'

const Home = (props) => {

  const openInsta = () => {
    window.open("https://www.instagram.com/prince.bajagain/", "_blank");
  }

  return (
    <motion.div 
    className="home"
    animate={{
      background: [`radial-gradient(circle at 50% 150%, rgba(255, 175, 84, 0.6) 20%, rgba(0, 0, 0, 0) 60%),
                  radial-gradient(circle at 20% 200%, rgba(255, 175, 84, 0.6) 25%, rgba(0, 0, 0, 0) 55%),
                  radial-gradient(circle at 80% 200%, rgba(255, 175, 84, 0.6) 25%, rgba(0, 0, 0, 0) 55%)`,
                  `radial-gradient(circle at 50% 150%, rgb(255, 238, 0) 20%, rgba(0, 0, 0, 0) 60%),
                  radial-gradient(circle at 20% 200%, rgb(238, 255, 0) 25%, rgba(0, 0, 0, 0) 55%),
                  radial-gradient(circle at 80% 200%, rgb(217, 255, 0) 25%, rgba(0, 0, 0, 0) 55%)`,`radial-gradient(circle at 50% 150%, rgba(255, 175, 84, 0.6) 20%, rgba(0, 0, 0, 0) 60%),
                  radial-gradient(circle at 20% 200%, rgba(255, 175, 84, 0.6) 25%, rgba(0, 0, 0, 0) 55%),
                  radial-gradient(circle at 80% 200%, rgba(255, 175, 84, 0.6) 25%, rgba(0, 0, 0, 0) 55%)`]

    }}
    transition={{
      duration: 4,
      repeat: Infinity
    }}
    ref={props.home}
    >
      <div className="imageSection">
      
      </div>
      <div className="contentSection">
        <h1>Enthusiastic Innovator</h1>
        <p id="mainWords">Hey there,<br/>I'm <span id="princeText">Prince</span> Bajgain.</p>
        <p id="desc">My mission is to innovate and beautify the innovation .</p>
  
          <div className="chatLink" onClick={openInsta}>
            <span>Access Me Via Instagram.</span>
            <div id="icon">
                <img src={`/public/black-instagram-icon.png`}  alt="" />
            </div>
          </div>

          <button className="mobileChatLink" onClick={openInsta}>Access Me</button>
        
      </div>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
    </motion.div>
  )
}

export default Home

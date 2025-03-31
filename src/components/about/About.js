import React, { useRef, useEffect } from 'react';
import './About.css'


const About = (props) => {

  const btnRef = useRef(null);

  const openGitHub = () => {
    window.open("https://github.com/mainprins", "_blank");
  }

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e) => {
      let x = e.pageX - btn.offsetLeft;
      let y = e.pageY - btn.offsetTop;
      btn.style.setProperty('--x', `${x}px`);
      btn.style.setProperty('--y', `${y}px`);
    };

    btn.addEventListener('mousemove', handleMouseMove);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="about" ref={props.about}>
      <div className="curveCreator">
      <div className="heading"><h1>My Expertise</h1></div>
       <div className="mainContent">
         <div id="skill1" className="skillBox" >
           <figure>
             <img src="/node.svg" alt="" />
           </figure>
           <div className="progressBar">
             <div className="desc">
               <h1>Node JS</h1>
               <h1>80%</h1>
             </div>
             <div className="outer">
               <div className="inner js"></div>
             </div>
           </div>
         </div>
         <div id="skill2" className="skillBox" >
           <figure>
             <img src="/react.svg" alt="" />
           </figure>
           <div className="progressBar">
           <div className="desc">
               <h1>React</h1>
               <h1>90%</h1>
             </div>
             <div className="outer">
               <div className="inner react"></div>
             </div>
           </div>
         </div>
         <div id="skill3" className="skillBox" >
           <figure>
             <img src="/mongo.svg" alt="" />
           </figure>
           <div className="progressBar">
           <div className="desc">
               <h1>MongoDB</h1>
               <h1>70%</h1>
             </div>
           <div className="outer">
               <div className="inner mongo"></div>
             </div>
           </div>
         </div>
         <div id="skill4" className="skillBox" >
            <figure>
              <img src="/css.svg" alt="" />
            </figure>
            <div className="progressBar">
            <div className="desc">
               <h1>CSS3</h1>
               <h1>90%</h1>
             </div>
            <div className="outer">
               <div className="inner css"></div>
             </div>
            </div>
        </div>
    
              <button ref={btnRef} onClick={openGitHub} style={{"--clr":"rgb(255, 251, 0)"}}>
                  <span>Explore Projects</span>
              </button>
       </div>
      </div>
      
    </div>
  )
}

export default About

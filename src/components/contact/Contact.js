import React from 'react'
import './Contact.css'

const Contact = (props) => {

  const openInsta = () => {
    window.open("https://www.instagram.com/prince.bajagain/", "_blank");
  }

  const openFb = () => {
    window.open("https://www.facebook.com/prince.homa.773", "_blank");
  }

  const openWhatsapp = () => {
    window.open("https://www.instagram.com/prince.bajagain/", "_blank");
  }

  return (
    <div className="contact" ref={props.contact}>
       <div className="left">
        
         <h1 className="mainHead">Get In Touch</h1>
         <p>I am open to connect with you.</p>
         <div className="contactCategories">
            <div className="phone">
                <figure>
                    <img src={`${process.env.PUBLIC_URL}/telephone.svg`} alt="Phone Icon" />
                </figure>
                <div className="phoneDescSec">
                    <h1>Phone</h1>
                    <div className="phoneDesc">+9779708090851</div>
                </div>
            </div>
            <div className="email"> 
                <figure>
                    <img src={`${process.env.PUBLIC_URL}/email.svg`} alt="Email Icon" />
                </figure>
                <div className="emailDescSec">
                  <h1>Email</h1>
                  <div className="emailDesc">princebgn123@gmail.com</div>
                </div>
            </div>
         </div>
         <div className="contactIcons">
            <img src={`${process.env.PUBLIC_URL}/facebook.svg`} onClick={openFb} alt="Facebook Icon" />
            <img src={`${process.env.PUBLIC_URL}/insta.svg`} alt="Instagram Icon" onClick={openInsta}/>
            <img src={`${process.env.PUBLIC_URL}/whatsapp.svg`} onClick={openWhatsapp} alt="Whatsapp Icon" />
         </div>
         <div className="curver">
          <img src={`${process.env.PUBLIC_URL}/bg-yellow.svg`} alt="Background Curve" />
         </div>
       </div>
       <div className="right">
         <form ref={props.form} onSubmit={props.sendEmail}>
            <input type="text" placeholder='Enter Your Name' name='name' required/>
            <input type="email" placeholder='Enter Your Email' name='email' required/>
            <input type="text" placeholder='Enter The Subject' required/>
            <textarea cols="30" rows="10" placeholder='Description' name='message' required></textarea>
            <input type='submit' id='button' value="submit"/>
         </form>
       </div>
    </div>
  )
}

export default Contact;

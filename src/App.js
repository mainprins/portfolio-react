
import './App.css';
import Navbar from './components/navbar/Navbar.js'
import Home from './components/home/Home.js'
import About from './components/about/About.js'
import Contact from './components/contact/Contact.js'
import Footer from './components/footer/Footer.js'
import emailjs from '@emailjs/browser';
import {useEffect, useState, useRef} from 'react'

function App() {
  const form = useRef();

  const [spanPosition, setSpanPosition] = useState("home");

  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
   window.scrollTo({
     top: elementRef.current.offsetTop,
     behavior: 'smooth'
   })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1cklavh', 'template_200x06a', form.current, {
        publicKey: '4JkAaLAbja6PHVor8',
      })
      .then(
        () => {
          alert('SUCCESS!');
          form.current.reset();

        },
        (error) => {
          alert("Failed to Submit,Please Ensure everything is correct");
        },
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = about.current.offsetTop;
      const contactTop = contact.current.offsetTop;
      const scrollPosition = window.scrollY + 100;

      if (scrollPosition >= contactTop) {
        setSpanPosition(90.5);
      } else if (scrollPosition >= aboutTop) {
        setSpanPosition(84);
      } else {
        setSpanPosition(78);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
     <Navbar scrollToSection={scrollToSection} home = {home} about = {about} contact = {contact} spanPosition = {spanPosition}/>
     <Home home = {home}/>
     <About about = {about}/>
     <Contact contact = {contact} form = {form} sendEmail = {sendEmail}/>
     {/* <Footer/> */}
    </>
  );
}

export default App;

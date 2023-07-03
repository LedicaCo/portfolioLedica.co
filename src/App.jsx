import  { useState } from 'react';
import './App.css';
import './assets/css/navbar.css';
import './assets/css/profile.css';
import './assets/css/layout.css';
import './assets/css/footer.css';
import "./assets/css/about-me.css";
import './assets/css/certificates.css';
import './assets/css/MyWorks.css';
import './assets/css/ContacMe.css';
import Header from './components/Header';
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Certificates from './components/Certificates'
import MyWorks from './components/MyWorks'
import ContacMe from './components/ContacMe'
import Footer from './components/Footer'




function App() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = (e) => {
    setNavbarVisible(!navbarVisible);
    e.preventDefault();
  };
  

  return (
    <div className='main__container'>
      <Header toggleNavbar={toggleNavbar} navbarVisible={navbarVisible} />
      <Profile />
      <AboutMe />
      <Certificates />
      <MyWorks />
      <ContacMe />
      <Footer />

    </div>
  );
}

export default App;

import React from 'react';
import '../UI/Home.css';
import '../UI/SocialMedia.css';
import stylesButton from './Button';

function Home() {
  const linkedinUrl = '/linkedin.png';

  return (
    <div className="home-container">
      <header className="header">
        <p className="p"> PORTFOLIO </p>
        <a href="/contact" className="contact-link">CONTACT</a>
        <a href="/projects" className="contact-link">PROJECTS</a> 
        <a href="/about" className="contact-link">ABOUT</a> 
        <a href="/home" className="contact-link">HOME</a> 
      </header>
      <div className='content'>
        <h1 className="h1">Hi, my name is Livia Bonifácio</h1>
        <h4 className="h4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
        <a className={stylesButton.a} href="/projects">
          <Button>PROJECTS</Button> 
        </a>
      </div>

      {/* Links de Mídia Social */}
      <div className="container">
        <a href="https://www.linkedin.com/seu-usuario" target="_blank" rel="noopener noreferrer">
          {/* <img src={linkedinUrl} alt="LinkedIn" />  */}
        </a>
      </div>
    </div>
  );
}

export default Home;

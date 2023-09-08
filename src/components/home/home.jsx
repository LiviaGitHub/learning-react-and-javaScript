import React from "react";
import "./home.css";
import stylesButton from "../button/button.css";
import Button from "../button/button.jsx";

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <p className="p"> portfolio </p>
        <a href="/contact" className="contact-link">
          contact
        </a>
        <a href="/projects" className="contact-link">
          projects
        </a>
        <a href="/about" className="contact-link">
          about
        </a>
        <a href="/home" className="contact-link">
          home
        </a>
      </header>
      <div className="content">
        <h1 className="h1">Hi, my name is Livia Bonifácio</h1>
        <h4 className="h4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </h4>
        <a className={stylesButton.a} href="/projects">
          <Button>projects</Button>
        </a>
      </div>

      {/* Links de Mídia Social */}
      <div className="social_media">
        <a
          href="https://www.linkedin.com/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src={linkedinUrl} alt="LinkedIn" />  */}
        </a>
      </div>
    </div>
  );
}

export default Home;

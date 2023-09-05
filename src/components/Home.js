import React from 'react';
import '../UI/Home.css';

function Home() {
  const backgroundImageUrl = '/background.jpg';

  return (
    <div className="home-container" style={{
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundSize: '100% 100%',
      minHeight: '100vh',
    }}>
    <header className="header">
      <p className="p"> LIVIA BONIFÁCIO </p>
      <a href="/contact" className="contact-link">CONTACT</a> {/* Add the contact link */}
      <a href="/projects" className="contact-link">PROJECTS</a> {/* Add the contact link */}
      <a href="/about" className="contact-link">ABOUT</a> {/* Add the contact link */}
      <a href="/home" className="contact-link">HOME</a> {/* Add the contact link */}
    </header>
    </div>
  );
}

export default Home;

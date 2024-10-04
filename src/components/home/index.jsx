import React from 'react';
import './home.css';
import { Button } from '../button';
import { Header } from '../header';

export const HomePage = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='content'>
        <h1 className='home-h1'>Hi, my name is Livia Bonifácio</h1>
        <h4 className='h4'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h4>
        <a href='/projects'>
          <Button>projects</Button>
        </a>
      </div>

      {/* Links de Mídia Social */}
      <div className='social_media'>
        <a
          href='https://www.linkedin.com/seu-usuario'
          target='_blank'
          rel='noopener noreferrer'
        >
          {/* <img src={linkedinUrl} alt='LinkedIn' />  */}
        </a>
      </div>
    </div>
  );
};

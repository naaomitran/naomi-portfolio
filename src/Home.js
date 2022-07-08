import './Style.css'
import arrowOutline from './assets/arrow-outline.png'
import snack from './assets/snackBanner.png'
import ncis from './assets/ncisBanner.png'
import barrtech from './assets/barrtechBanner.png'
import projects from './assets/personalProjectsBanner.png'

import React from 'react';

function Home() {
  return (
    <div className="outer-container">
      <header className='inner-container'>
        <div className='text-container'>
          <p className='subtitle amikoReg'>
            Hi, I'm
          </p>
          <p className='title inline'>
            NAOMI.
          </p>
        </div>
        <div className='text-container'>
          <p className='subtitle amikoBold'>
            I like to 
            <a className='title outline code'>code,</a>
            <a className='title outline design'>design,</a>
          </p>
        </div>
        <div className='text-container'>
          <p className='subtitle amikoBold'>
            <a className='title outline eat' style={{paddingLeft: "0"}}>eat,</a>
            and
            <a className='title outline sweat'>sweat.</a>
          </p>
        </div>
        <div className='text-container'>
          <p className='paragraph-text amikoReg'>
          I'm a designer and developer based in Vancouver, Canada with experience 
          in delivering end-to-end UX/UI design and implementation for responsive web applications and interfaces. 
          I'm passionate about improving the ease and the looks of anything on the web that people can interact with. 
          </p>
        </div>

        <div className='arrow-container'>
        <img src={arrowOutline} className="arrow" alt="arrow" />
        </div>

        <div className='text-container'>
          <p className='paragraph-text amikoBold'>
            RECENT WORKS
          </p>
        </div>
        <div style={{alignItems: "center"}}>
          <a href={`${process.env.PUBLIC_URL}/pages/snack`}>
          <img src={snack} className="work-banner" alt="snack" />
          </a>
          <a href={`${process.env.PUBLIC_URL}/pages/coming-soon`}>
          <img src={ncis} className="work-banner" alt="ncis" />
          </a>
          <a href={`${process.env.PUBLIC_URL}/pages/barrtech-mechanical`}>
          <img src={barrtech} className="work-banner" alt="barrtech" />
          </a>
          <a href={`${process.env.PUBLIC_URL}/pages/coming-soon`}>
          <img src={projects} className="work-banner" alt="personal-projects" />
          </a>
        </div>
        
      </header>
    </div>
  );
}

export default Home;

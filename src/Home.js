import './Style.css'
import arrowOutline from './assets/arrow-outline.png'
import snack from './assets/snackBanner.png'
import gu from './assets/ubcguBanner.png'
import ncis from './assets/ncisBanner.png'
import barrtech from './assets/barrtechBanner.png'
import mpr from './assets/mprBanner.png'
import expedia from './assets/expediaBanner.png'
import projects from './assets/personalProjectsBanner.png'

import email from './assets/Email.png'
import phone from './assets/phone.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'

import React from 'react';

function Home() {
  return (
    <div className="outer-container">
      <header className='inner-container'>
        <div className='sub-container'>
        <div className='text-container'>
          <p className='subtitle amikoReg'>
            Hi, I'm
          <a className='title inline'>NAOMI.</a>
            <br></br>
            <a className='title outline code'>WEB DEVELOPER.</a><a> </a>
            <a className='title outline design'>DESIGNER.</a> <a> </a>
            <a className='title outline sweat'>FOODIE.</a>
          </p>
        </div>
        <div className='text-container'>
          <p className='paragraph-text amikoReg'>
          I'm a designer and developer based in Vancouver, Canada with experience 
          in delivering end-to-end web designs and implementation for responsive web applications and interfaces. 
          I'm passionate about improving the ease and the looks of anything on the web that people can interact with. <a> </a>  
          <a href='#'>More about me.</a>
          </p>
        </div>

        <div className='arrow-container'>
        <img src={arrowOutline} className="arrow" alt="arrow" />
        </div>

        </div>
        
        <div className='text-container'>
          <p className='paragraph-text amikoBold'>
            RECENT WORKS
          </p>
        </div>
        <div style={{alignItems: "center"}}>
        <a href={`${process.env.PUBLIC_URL}/coming-soon`}>
          <img src={gu} className="work-banner" alt="geeringup" />
          </a>
          <a href={`${process.env.PUBLIC_URL}/snack`}>
          <img src={snack} className="work-banner" alt="snack" />
          </a>
          <a href={`${process.env.PUBLIC_URL}/coming-soon`}>
          <img src={ncis} className="work-banner" alt="ncis" />
          </a>
          <a href={`${process.env.PUBLIC_URL}/barrtech-mechanical`}>
          <img src={barrtech} className="work-banner" alt="barrtech" />
          </a>
          <a href={`${process.env.PUBLIC_URL}/mountain-park-resort`}>
          <img src={mpr} className="work-banner" alt="mpr" />
          </a>
          <a href={`${process.env.PUBLIC_URL}/expedia-redesign`}>
          <img src={expedia} className="work-banner" alt="expedia" />
          </a>
          <a href={`${process.env.PUBLIC_URL}/personal-projects`}>
          <img src={projects} className="work-banner" alt="personal-projects" />
          </a>
        </div>

        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
  
          {/* connect */}
          <div className='text-container' style={{justifyContent: "center"}}>
            <p className='work-subtitle amikoBold'>MEET WITH ME</p>
          </div>
          <div className='text-container' style={{justifyContent: "center"}}>
            <p className='work-paragraph-text amikoReg'>
              Let's grab coffee? Or make our own and meet virutally? ☕️
            </p>
          </div>
          <div className='work-text-container'style={{justifyContent: "center"}}>
            <a href='mailto:naaomitran@gmail.com' className='icon-container'>
              <img src={email} alt="email" className='icon' />
            </a>
            <a href="tel:204-583-3899" className='icon-container'>
              <img src={phone} alt="phone" className='icon'/>
            </a>
            <a href='https://www.linkedin.com/in/naaomitran/' className='icon-container'>
              <img src={linkedin} alt="linkedin" className='icon'/>
            </a>
            <a href='https://github.com/naaomitran' className='icon-container'>
              <img src={github} alt="github" className='icon'/>
            </a>
          </div>
        
      </header>
    </div>
  );
}

export default Home;
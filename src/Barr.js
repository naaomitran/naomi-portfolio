import './Style.css'
import React, { useEffect } from 'react'

import email from './assets/Email.png'
import phone from './assets/phone.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import barr from './assets/barrHeader.png'

function Barr() {
  useEffect(() => {
    document.title = "BARRTECH Mechanical"
  }, [])
  
    return (
      <div className="work-outer-container">
        <div style={{alignItems: "center"}}>
          <img src={barr} alt="barr" className='work-header'/>
        </div>
        <header className='work-inner-container'>
          <div className='work-text-container'>
            <p className='amikoReg work-paragraph-text'>
              <a className='work-title fatFace'>Lead Web Designer </a>
              May 2022 - June 2022
            </p>
          </div>
  
          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>OVERVIEW: PRODUCT</p>
          </div>
          <div className='text-container'>
            <p className='work-paragraph-text amikoReg'>
              <a className='amikoBold'>BARRTECH Mechanical</a> is an HVAC company located in Winnipeg, MB, and provides furnacing and air conditioning services. </p>
          </div>
  
          {/* tasks */}
          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>OVERVIEW: TASKS</p>
          </div>
          <div className='work-text-container'>
            <p className='work-paragraph-text amikoReg'>
            As the lead web designer, I was involved with end-to-end website reconstruction. By using the key components that defined their website, I redesigned their Homepage, About Us, and Contact pages.
            <br></br>
            <br></br>
            I used Figma and Wix in this process.
            </p>
          </div>
          
          {/* specific tasks */}
          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>WEBSITE</p> 
          </div>
          <div className='work-text-container'>
            <p className='work-paragraph-text amikoReg'>
            Check out the Homepage, About Us, and Contact pages @ <a href='https://www.barrtechmechanical.com/' className='link'>https://www.barrtechmechanical.com/</a>
            </p>
          </div>
  
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
  
          {/* connect */}
          <div className='text-container' style={{justifyContent: "center"}}>
            <p className='work-subtitle amikoBold'>WANT TO KNOW MORE?</p>
          </div>
          <div className='text-container' style={{justifyContent: "center"}}>
            <p className='work-paragraph-text amikoReg'>
              Reach out and let's talk!
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
  
          <br></br>
          <br></br>
          <br></br>
  
          {/* BACK */}
          <div className='text-container'>
            <a className='link work-paragraph-text amikoBold' href={`${process.env.PUBLIC_URL}/`}>
              BACK
            </a>
          </div>
  
        </header>
      </div>
    );
  }
  
  export default Barr;
  
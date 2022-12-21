import './Style.css'
import React, { useEffect } from 'react'

import email from './assets/Email.png'
import phone from './assets/phone.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import mprHeader from './assets/mprHeader.png'

function Mpr() {
  useEffect(() => {
    document.title = "Mountain Park Resort"
  }, [])
  
    return (
      <div className="work-outer-container">
        <div style={{alignItems: "center"}}>
          <img src={mprHeader} alt="snack" className='work-header'/>
        </div>
        <header className='work-inner-container'>
          <div className='work-text-container'>
            <p className='amikoReg work-paragraph-text'>
              <a className='work-title fatFace'>Lead Web Designer </a>
              July 2022 - August 2022
            </p>
          </div>
  
          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>OVERVIEW: PRODUCT</p>
          </div>
          <div className='text-container'>
            <p className='work-paragraph-text amikoReg'>
              <a className='amikoBold'>Mountain Park Resort</a> is a campground & RB park located in Rickson, BC. </p>
          </div>
  
          {/* tasks */}
          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>OVERVIEW: TASKS</p>
          </div>
          <div className='work-text-container'>
            <p className='work-paragraph-text amikoReg'>
            As the lead web designer, I revamped their website by first creating wireframes and mockups for the homepage and a template for the other pages, 
            writing content for their website, explored colour palettes and typography options, and then fleshed out the design, reiterating to satisfy the client's needs and preferences.

            I also contributed to the design of the logo, developing rough ideas based on elements they wanted to see in their logo. 
            <br></br>
            <br></br>
            I used WordPress, InVision, and Affinity Designer in this process.
            </p>
          </div>
          
          {/* specific tasks */}
          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>WEBSITE</p> 
          </div>
          <div className='work-text-container'>
            <p className='work-paragraph-text amikoReg'>
            Check out the updated website @ <a href='https://mountainparkresort.ca/' className='link'>https://mountainparkresort.ca/</a>
            </p>
          </div>
  
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
  
          {/* connect */}
          <div className='text-container' style={{justifyContent: "center"}}>
            <p className='work-subtitle amikoBold'>WANT TO LEARN HOW I GOT INTO FREELANCING?</p>
          </div>
          <div className='text-container' style={{justifyContent: "center"}}>
            <p className='work-paragraph-text amikoReg'>
              Let me tell you about my freelancing period!
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
  
  export default Mpr;
  
import './Style.css'
import React, { useEffect } from 'react'

import email from './assets/Email.png'
import phone from './assets/phone.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import report from './assets/NCISreport.pdf'
import presentation from './assets/NCISpresentation.mp4'
import ncis from './assets/ncisHeader.png'

function Ncis() {
  useEffect(() => {
    document.title = "Nautical Crime Investigation Services"
  }, [])
  
    return (
      <div className="work-outer-container">
        <div style={{alignItems: "center"}}>
          <img src={ncis} alt="ncis" className='work-header'/>
        </div>
        <header className='work-inner-container'>
          <div className='work-text-container'>
            <p className='amikoReg work-paragraph-text'>
              <a className='work-title fatFace'>Lead UX / UI Designer & Researcher </a>
              May 2022 - December 2022
            </p>
          </div>
  
          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>OVERVIEW: COMPANY</p>
          </div>
          <div className='text-container'>
            <p className='work-paragraph-text amikoReg'>
              <a className='amikoBold'>Nautical Crime Investigation Services (NCIS)</a> provides technological solutions 
              for national security and maritime defense and uses artificial
              intelligence and tracking technologies for risk assessment and detection of 
              crime occurrences at sea and on land. </p>
          </div>
  
          {/* tasks */}
          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>OVERVIEW: TASKS</p>
          </div>
          <div className='work-text-container'>
            <p className='work-paragraph-text amikoReg'>
            I worked on two large projects during my time at this company. 
            I designed their entire website from scratch, working closely with the founders of the company and the graphic designer.
            Once it was ready for handoff, I worked closely with the software developer to ensure implementation was easy and acted as the liaison for the team. 
            I also worked on designing their product, Grace, which is an AI powered risk assessment tool that uses machine learning to predict and identify 
            suspicious activities and notify the appropriate organizations to intercept before it occurs. 
            I used Maritime Domain Platforms (MDA), scholarly articles / literature, Figma, pen & paper, and usability studies for this project. 
            <br></br>
            </p>
          </div>
          
          {/* specific tasks */}
          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>WEBSITE</p> 
          </div>
          <div className='work-text-container'>
            <p className='work-paragraph-text amikoReg'>
            Come back soon! It is still under development.
             {/* <a href='https://www.barrtechmechanical.com/' className='link'>https://www.barrtechmechanical.com/</a> */}
            </p>
          </div>
          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>GRACE</p> 
          </div>
          <div className='work-text-container'>
            <p className='work-paragraph-text amikoReg'>
            Come back soon for the entire case study! For now, please see my final report and presentation: 
            <br></br><br></br>
            <iframe src={report} width="100%" height="500px"/>

            <video width="100%" autoPlay={true} controls>
              <source src={presentation} type="video/mp4"></source>
            </video>

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
  
  export default Ncis;
  
import './Style.css'
import React, { useEffect } from 'react'

import email from './assets/Email.png'
import phone from './assets/phone.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import personalprojectheader from './assets/personal-project-header.png'

import hg1 from './assets/personal projects/hg1.png'
import hg2 from './assets/personal projects/hg2.png'
import hg3 from './assets/personal projects/hg3.png'
import hg4 from './assets/personal projects/hg4.png'
import hg5 from './assets/personal projects/hg5.png'
import hg6 from './assets/personal projects/hg6.png'
import hg7 from './assets/personal projects/hg7.png'
import hg8 from './assets/personal projects/hg8.png'
import hg9 from './assets/personal projects/hg9.png'
import hg10 from './assets/personal projects/hg10.png'
import hg11 from './assets/personal projects/hg11.png'
import hg12 from './assets/personal projects/hg12.png'

import db from './assets/personal projects/db.png'
import db1 from './assets/personal projects/db1.png'
import db2 from './assets/personal projects/db2.png'
import db3 from './assets/personal projects/db3.png'
import db4 from './assets/personal projects/db4.png'
import db5 from './assets/personal projects/db5.png'
import db6 from './assets/personal projects/db6.png'
import db7 from './assets/personal projects/db7.png'

import rr1 from './assets/personal projects/rr1.png'
import rr2 from './assets/personal projects/rr2.png'
import rr3 from './assets/personal projects/rr3.png'
import rr4 from './assets/personal projects/rr4.png'

import sg1 from './assets/personal projects/sg1.png'
import sg2 from './assets/personal projects/sg2.png'
import sg3 from './assets/personal projects/sg3.png'
import sg4 from './assets/personal projects/sg4.png'
import sg5 from './assets/personal projects/sg5.png'

import cc1 from './assets/personal projects/carbon-counter.png'
import cc2 from './assets/personal projects/cc1.png'
import cc3 from './assets/personal projects/cc2.png'
import cc4 from './assets/personal projects/cc3.png'

import vk1 from './assets/personal projects/vk1.png'
import vk2 from './assets/personal projects/vk2.png'
import vk3 from './assets/personal projects/vk3.png'


function PersonalProjects() {
  useEffect(() => {
    document.title = "Personal Projects"
  }, [])
  
  var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 8000);
    
    };
    
    window.onload = function() {
    responsiveSlider();  
    }

    return (
      <div className="work-outer-container">
        <div style={{alignItems: "center"}}>
          <img src={personalprojectheader} alt="snack" className='work-header'/>
        </div>
        <header className='work-inner-container'>
          <div className='work-text-container'>
            <p className='amikoReg work-paragraph-text'>
              <a className='work-title fatFace'>Just Me </a>
              September 2021 - Ongoing
            </p>
          </div>
  
          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>HOT GIRL 75</p>
          </div>
          <div className='text-container'>
            <p className='work-paragraph-text amikoReg'>
            Inspired by the trend Hard 75, this iOS application aims to encourage women to stay healthy, both physically and mentally. This app keeps track of habits, daily routines,
            and provides general health and wellness tips to help you reach your goals.
            <br></br>
            <br></br>
            In this project, I experienced end-to-end product development. From brainstorming, creating and prototyping to testing and iterating, I used Tiktok for inspo, Figma for
            wireframing and prototyping, and SwiftUI and XCode for implementing. 
            </p>
          </div>
          <div id='slider'>
            <ul id="slideWrap"> 
              <li><img src={hg1} alt=""/></li>
              <li><img src={hg2} alt=""/></li>
              <li><img src={hg3} alt=""/></li>
              <li><img src={hg4} alt=""/></li>
              <li><img src={hg5} alt=""/></li>
              <li><img src={hg6} alt=""/></li>
              <li><img src={hg7} alt=""/></li>
              <li><img src={hg8} alt=""/></li>
              <li><img src={hg9} alt=""/></li>
              <li><img src={hg10} alt=""/></li>
              <li><img src={hg11} alt=""/></li>
              <li><img src={hg12} alt=""/></li>
            </ul>

            <a id="prev" href="#see-prev">&#8810;</a>
            <a id="next" href="#see-next">&#8811;</a>
          </div>
          <br></br>

          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>DATE-A-BAE-SE</p>
          </div>
          <div className='text-container'>
            <p className='work-paragraph-text amikoReg'>
            For a relational database course, my team developed a database for a dating application from scratch (inspired by my work from Snack obviously!).
            <br></br>
            <br></br>
            We modelled the domain of the application, defined the functionalities, designed and implemented the schema, designed the GUI, and populate our own database.
            <br></br>
            <br></br>
            Java, Oracle, and SQL were used for the backend of this project, and JavaScript, React, HTML, and CSS were used for the frontend. Figma was used to design the wireframes of the GUI. 
            </p>
          </div>
          <div id="gallery">
            <img src={db1} alt=""/>
            <img src={db2} alt=""/>
            <img src={db3} alt=""/>
            <img src={db4} alt=""/>
            <img src={db5} alt=""/>
            <img src={db6} alt=""/>
            <img src={db7} alt=""/>
          </div>
          <br></br>
          
          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>RESTAURANT RECOMMENDER</p>
          </div>
          <div className='text-container'>
            <p className='work-paragraph-text amikoReg'>
            In my functional programming course, my team developed a restaurant recommender that runs in the console.
            <br></br>
            <br></br>
            We modelled the domain of the application, defined the functionalities, designed and implemented the schema, designed the GUI, and populated our own database.
            <br></br>
            <br></br>
            Prolog was our pick for a functional language!
            </p>
          </div>
          <div id="gallery2">
            <img src={rr2} alt=""/>
            <img src={rr3} alt=""/>
            <img src={rr4} alt=""/>
          </div>
          <br></br>

          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>SAFE GARBAGE</p>
          </div>
          <div className='text-container'>
            <p className='work-paragraph-text amikoReg'>
            For cmd-f hackathon 2021, I teamed up with another person to create Safe Garbage, a web application meant to differentiate garbage and recyclable items. 
            It also provides resources and information on the current global waste problem. 
            <br></br>
            <br></br>
            My main tasks were ideation, product design, and frontend implementation. My partner did the research, backend training, and presentation.
            <br></br>
            <br></br>
            HTML, CSS, JavaScript, and React were used to develop the frontend of the website, and Python and Jupyter Notebook were used to implement and train the program.            
            </p>
          </div>
          <div id="gallery3">
            <img src={sg2} alt=""/>
            <img src={sg3} alt=""/>
            <img src={sg4} alt=""/>
            <img src={sg5} alt=""/>
          </div>
          <br></br>

          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>(CO2)UNTER</p>
          </div>
          <div className='text-container'>
            <p className='work-paragraph-text amikoReg'>
            This Android application uses Google maps to track CO2 emission via transportation and was created during a 24 hour hackathon with another teammate.            
            <br></br>
            <br></br>
            My main task was ideation, research, and product design, including user stories, user flows, wireframes and mockups. My partner implemented the design and features.
            <br></br>
            <br></br>
            Figma, Java, and AndroidStudio were the main tools used to develop this application. 
            </p>
          </div>
          <div id="gallery4">
            <img src={cc4} alt=""/>
            <img src={cc2} alt=""/>
            <img src={cc3} alt=""/>
          </div>
          <br></br>

          <div className='work-text-container'>
            <p className='work-subtitle amikoBold'>VIRTUAL KITCHEN</p>
          </div>
          <div className='text-container'>
            <p className='work-paragraph-text amikoReg'>
            For my software construction course, I developed an application that allows you to track the items in your kitchen.             
            <br></br>
            <br></br>
            Functionalities include adding and removing an item, checking what items have expired, and viewing items based on food group, expired items, and all items.            <br></br>
            <br></br>
            This application was done using only Java. 
            </p>
          </div>
          <div id="gallery5">
            <img src={vk1} alt=""/>
            <img src={vk2} alt=""/>
            <img src={vk3} alt=""/>
          </div>
          <br></br>
          
          
  
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
  
          {/* connect */}
          <div className='text-container' style={{justifyContent: "center"}}>
            <p className='work-subtitle amikoBold'>I CAN EXPLAIN MORE ABOUT MY PROJECTS!</p>
          </div>
          <div className='text-container' style={{justifyContent: "center"}}>
            <p className='work-paragraph-text amikoReg'>
              Let's talk about my projects!
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
  
  export default PersonalProjects;
  
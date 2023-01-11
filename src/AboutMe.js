import './Style.css'

import professional from './assets/naomiPro.jpg'
import foodie from './assets/naomiFoodie.jpg'
import grad from './assets/naomiGraduate.png'
import travel from './assets/naomiTravel.jpg'

import email from './assets/Email.png'
import phone from './assets/phone.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'

import React from 'react';

function Home() {
  return (
    <div className="outer-container">
        <div className='name-header-container'>
          <a className='title inline'>NAOMI</a>
          <a className='title outline '>TRAN</a> 
          <a className='title inline'>NAOMI</a>
          <a className='title outline '>TRAN</a> 
          <a className='title inline'>NAOMI</a>
          <a className='title outline '>TRAN</a> 
        </div>
        <div style={{width:"100vw", display: "flex", flexDirection: "row", textAlign: "center", alignItems: "center", justifyContent: "center"}}>
            <img src={professional} className="circle pfp" alt="professional" />
            <img src={travel} className="circle pfp" alt="travel" />
            <img src={grad} className="circle pfp" alt="grad" />
            <img src={foodie} className="circle pfp" alt="professional" />
        </div>
        
      <header className='inner-container'>
        <div className='text-container'>
            <p className='amikoReg paragraph-text'>
              <a className='work-title fatFace'>PROFESSIONALLY, </a>
            I've interned as a software developer at a start up that helps find love for Gen-Z through a video-dating app, interned as a UX / UI designer & researcher at another start up that creates tech solutions to deter ocean crimes,
            freelanced on my own as a web designer / developer, and worked as a web developer for a non-profit organization that promotes STEM topics to kids.   
            </p>
        </div>
        <div className='text-container'>
            <p className='amikoReg paragraph-text'>
              <a className='work-title fatFace'>PERSONALLY, </a>
            I love travelling, exploring new cities & cultures, eating new cuisine, doing new activities, learning new skills, and changing up the scenery. 
            And, I love building things from scratch, including crocheting, cooking, baking, creating websites, painting, writing, and any other forms that allows me to create something from nothing!
            I also enjoy the outdoors like hiking, biking, camping, and walking, though I do have an irrational fear for wasps and anything that stings, and if I see a sign 
            that warns me of coyote or bear sightings, I'm out of there. But since I'm from Winnipeg, mosquitoes and snow got nothing on me!
            Of course, I find myself enjoying the indoors as well with a good book, coffee, or a great series to binge on Netflix!
            </p>
        </div>
        <div className='text-container'>
            <p className='amikoReg paragraph-text'>
              <a className='work-title fatFace'>ACADEMICALLY, </a>
            I graduated from the University of British Columbia in the class of 2023 with a BSc. in Cognitive Systems (COGS), specializing in computational intelligence and design which is just a fancy
            name for computer science. For those who are unfamiliar with this major, COGS is an multi-disciplinary undergraduate program involving computer science, linguistics, philosophy, and psychology, so although my major was in computer science,
            I took a good chunk of courses in psychology and a few in philosophy and linguistics. My favourite course throughout my whole undergrad might have been logic (under philosophy)!
            I'm also in the dual degree program and am a candidate for my Masters in Management (to be completed by December 2023). During my undergrad, I took business courses covering communications, accounting, OBHR, finance, and marketing.
            <br></br><br></br>
            So what I'm hoping is that: <a className='amikoBold'>technology + understanding people + understanding business = job?</a> 
            </p>
        </div>
        <div className='text-container'>
            <p className='amikoReg paragraph-text'>
              <a className='work-title fatFace'>SOCIALLY, </a>
            I run a food page on Instagram. You may know me (probably not) as @creamricecooks. It started off as a way for me to document the recipes I learned / the meals I made myself when I first moved out and had to learn how to cook
            for the first time. It was a COVID hobby at first, and then I started getting partnerships & collaborations. The account slowly became more of a restaurant review page but I still show off my homemade meals from time to time. 
            </p>
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

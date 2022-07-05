import './Style.css'
import arrowOutline from './assets/arrow-outline.png'
import snack from './assets/snackHeader.png'

import share1 from './assets/snack-share1.png'
import share2 from './assets/snack-share2.png'

import interest1 from './assets/snack-interest1.png'
import interest2 from './assets/snack-interest2.png'

import website from './assets/website-update copy.mov'

import countryPicker1 from './assets/country list.png'
import countryPicker2 from './assets/country picker.png'

import upload1 from './assets/uploadProfile.png'
import upload2 from './assets/uploadProfile2.png'
import upload3 from './assets/uploadProfile3.png'

import videobar1 from './assets/videobar.png'
import videobar2 from './assets/videobar2.png'

import hashtag1 from './assets/hashtag.png'
import hashtag2 from './assets/hashtag2.png'
import hashtag3 from './assets/hashtag3.png'
import hashtag4 from './assets/hashtag4.png'

import unlock1 from './assets/unlockALike.png'
import unlock2 from './assets/unlockALike2.png'

import email from './assets/Email.png'
import phone from './assets/phone.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'



function Snack() {
  return (
    <div className="work-outer-container">
      <div style={{alignItems: "center"}}>
        <img src={snack} alt="snack" className='work-header'/>
      </div>
      <header className='work-inner-container'>
        <div className='work-text-container'>
          <p className='amikoReg work-paragraph-text'>
            <a className='work-title fatFace'>Software Developer Intern </a>
            May 2021 - Ongoing
          </p>
        </div>

        <div className='work-text-container'>
          <p className='work-subtitle amikoBold'>OVERVIEW: PRODUCT</p>
        </div>
        <div className='text-container'>
          <p className='work-paragraph-text amikoReg'>
            <a className='amikoBold'>Snack</a> is “video-first” dating app targeting Gen-Z users. 
          It's as if Tinder and TikTok had a baby. </p>
        </div>

        {/* tasks */}
        <div className='work-text-container'>
          <p className='work-subtitle amikoBold'>OVERVIEW: TASKS</p>
        </div>
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoReg'>
            As an intern, I get to experience full stack development, as well as iOS development. 
          </p>
        </div>

        {/* frontend */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
            Frontend Skills (Web Development) 
          <br></br>
            <a className='amikoReg'>
            I implemented user-facing sharing features and developed / enhanced features in the moderation backoffice tools.
            <br></br><br></br>
            I used HTML, CSS, JavaScript, template engines, React, Git, and Hugo.
            </a>
          </p>
        </div>

        {/* backend */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
            Backend Skills (Building performant scalable REST backend) 
          <br></br>
            <a className='amikoReg'>
            I implemented learnings of Golang and developed skills in cross functional cooperation across the engineering department.
            <br></br><br></br>
            I used Go, template engines, PostgreSQL, Git, DBeaver, and REST API with Postman.            
            </a>
          </p>
        </div>

        {/* iOS */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
          iOS Skills (iOS mobile development) 
          <br></br>
            <a className='amikoReg'>
            I learned general iOS software development skills, working closely with the product designers. I implemented features and designs into the app. 
            <br></br><br></br>
            I used XCode, SwiftUI, REST API, and state management.          
            </a>
          </p>
        </div>
        
        {/* specific tasks */}
        <div className='work-text-container'>
          <p className='work-subtitle amikoBold'>SPECIFIC TASKS
          <br></br>
          <a className='amikoBold work-paragraph-text'>Asterisks*:</a> <a className='amikoReg paragraph-text'>Please reach out to learn more about what I did for these tasks due to privacy.</a>
          </p> 
        </div>

        {/* share pages */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
          Share Pages
          <br></br>
            <a className='amikoReg'>
            Find your profile or someone else's profile online  @ <a href='https://thesnackapp.com/user/@naomi393' className='link'>https://thesnackapp.com/user/&#123;username&#125;</a>  
            </a>
          </p>
        </div>
        <img src={share1} alt="snack" className='work-example'/>
        <img src={share2} alt="snack" className='work-example'/>

        {/* share pages */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
          Interest Pages
          <br></br>
            <a className='amikoReg'>
            Find the top interests currently being used on the app @ <a href='https://thesnackapp.com/topinterests' className='link'>https://thesnackapp.com/topinterests</a> and who uses 
            these interests @ <a href='https://thesnackapp.com/interest/foodie' className='link'>https://thesnackapp.com/interest/&#123;interest&#125;</a>        
            </a>
          </p>
        </div>
        <img src={interest1} alt="snack" className='work-example'/>
        <img src={interest2} alt="snack" className='work-example'/>

        {/* websites */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
          Website Version 2
          <br></br>
            <a className='amikoReg'>
            This was once <a href='https://thesnackapp.com/' className='link'>https://thesnackapp.com/</a>        
            </a>
          </p>
        </div>

        <video width="1000" autoPlay={true} loop muted>
          <source src={website} type="video/mp4"></source>
        </video>

        {/* prematching messages */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
          *Prematching Messages for Men
          <br></br>
            <a className='amikoReg'>
            Implemented the feature to allow men receive prematches 
            from women after filtering out potential scammers.      
            </a>
          </p>
        </div>

        {/* moderation pages */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
          *Moderation Pages
          <br></br>
            <a className='amikoReg'>
            Built the web interface for moderating in the backoffice 
            and developed features to moderate our highlighted videos.   
            </a>
          </p>
        </div>

        {/* country picker */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
          Country Picker
          <br></br>
            <a className='amikoReg'>
            Select your country's code when inputting your phone number when making your profile.       
            </a>
          </p>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <img src={countryPicker1} alt="snack" style={{width: "300px", padding: '5px'}}/>
          <img src={countryPicker2} alt="snack" style={{width: "300px", padding: '5px'}}/>
        </div>

        {/* video bar UI */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
          Video Bar
          <br></br>
            <a className='amikoReg'>
            See potential matches in your messages tab.
            </a>
          </p>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <img src={videobar1} alt="snack" style={{width: "300px", padding: '5px'}}/>
          <img src={videobar2} alt="snack" style={{width: "300px", padding: '5px'}}/>
        </div>

        {/* unlock a like */}
        <div className='text-container'>
          <p className='paragraph-text amikoBold'>
          Unlock A Like Update
          <br></br>
            <a className='amikoReg'>
            A fresher look on our <a style={{fontStyle: "italic"}}>Unlocking a Like</a> feature.
            </a>
          </p>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <img src={unlock1} alt="snack" style={{width: "300px", padding: '5px'}}/>
          <img src={unlock2} alt="snack" style={{width: "400px", padding: '5px'}}/>
        </div>

        {/* hashtag landing */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
          Discover Hashtags Update
          <br></br>
            <a className='amikoReg'>
            A fresher look on our <a style={{fontStyle: "italic"}}>Discover Hashtags</a> feature.
            </a>
          </p>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <img src={hashtag1} alt="snack" style={{width: "300px", padding: '5px'}}/>
          <img src={hashtag2} alt="snack" style={{width: "300px", padding: '5px'}}/>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <img src={hashtag3} alt="snack" style={{width: "300px", padding: '5px'}}/>
          <img src={hashtag4} alt="snack" style={{width: "300px", padding: '5px'}}/>
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
            Let's grab a snack and chat more 🥨
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
          <a className='link work-paragraph-text amikoBold' href='/'>
            BACK
          </a>
        </div>

      </header>
    </div>
  );
}

export default Snack;

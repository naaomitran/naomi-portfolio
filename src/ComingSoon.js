import './Style.css'

import arrowOutline from './assets/arrow-outline.png'
import snack from './assets/snackBanner.png'
import ncis from './assets/ncisBanner.png'
import barrtech from './assets/barrtechBanner.png'
import projects from './assets/personalProjectsBanner.png'

import { Link } from 'react-router';
import React, { useEffect } from 'react'

function ComingSoon() {
  useEffect(() => {
    document.title = "Coming Soon"
  }, [])
  
  return (
    <div className="outer-container" style={{backgroundColor: '#DAF6E0'}}>
      <header className='inner-container'>
        <div className='text-container'>
          <p className='subtitle fatFace'>
            Coming Soon
          </p>
        </div>

        <div className='text-container'>
          <p className='paragraph-text amigoReg'>
            In the meantime, checkout my other works!
          </p>
        </div>
        <div style={{alignItems: "center"}}>
          <a href={`${process.env.PUBLIC_URL}/snack`}>
          <img src={snack} className="work-banner" alt="snack" />
          </a>
          <a href={`${process.env.PUBLIC_URL}/barrtech-mechanical`}>
          <img src={barrtech} className="work-banner" alt="barrtech" />
          </a>
        </div>
        
      </header>
    </div>
  );
}

export default ComingSoon;

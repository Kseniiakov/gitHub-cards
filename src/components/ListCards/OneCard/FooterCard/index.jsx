import React from 'react'
import './FooterCard.css'

function FooterCard() {
  return (
    <div className='footerWrapper'>
        <div className='starsWrapper'>
          <img className='starsIcon' src="/images/star.svg" alt="star"/>
          <div className='starsNumber'>7</div>
        </div>
        <div className='forksWrapper'>
          <img className='forksIcon' src="/images/git.svg" alt="star"/>
          <div className='forksNumber'>3</div>
        </div>
    </div>
  )
}

export default FooterCard
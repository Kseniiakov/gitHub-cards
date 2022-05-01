import React from 'react'
import './HeaderCard.css'

function HeaderCard() {
  return (
    <div className='wrapperHeader'>
      <div className='iconWrapper'>
        <img className='iconProject' src="/images/book-outline.svg" alt="iconProject"/>
      </div>
        <h4 className='headerProject'>covid-19-tracker</h4>
    </div>
  )
}

export default HeaderCard;
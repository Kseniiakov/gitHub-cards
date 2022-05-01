import React from 'react'
import HeaderCard from './HeaderCard';
import Description from './Description';
import FooterCard from './FooterCard';
import LanguageColor from './LanguageColor';
import './OneCard.css'

function OneCard(props) {
  const { data } = props;

  return (
    <li className='oneCard'>
      <HeaderCard/>
      <Description/>
      <FooterCard/>
      <LanguageColor/>
    </li>
  )
}

export default OneCard;
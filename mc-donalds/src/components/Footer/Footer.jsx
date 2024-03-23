import React from 'react'
import logoFooter from '../../assets/footer/logoFooter.png'
import apple from '../../assets/footer/apple.png'
import play from '../../assets/footer/play.png'
import * as S from './footer_styled'

export default function Footer() {
  return (
    <S.Footer>  
      <S.Logo>
          <img src={logoFooter} alt="" />
          <p>© McDonald`s 2024</p>
      </S.Logo>
      <S.Apps>
        <img src={apple} alt=""/>
      </S.Apps>
      <S.Apps>
        <img src={play} alt=""/>
      </S.Apps>
    </S.Footer>
  )
}

import React from 'react'
import logo from '../../assets/header/logo.png'
import celular from '../../assets/header/celular.png'
import app from '../../assets/header/app.png'
import * as S from './header_syled'

export default function Header() {
  return (
    <S.Header>
      <S.LogoImage src={logo} alt="" />
      <S.BoxApp>
        <S.App>
        <S.AppImage src={app} alt="" />
          <S.AppText>Baixe o app</S.AppText>
        </S.App>
        <S.App color="#FFC72C">  
          <strong><p>peça seu méqui</p></strong>
          <S.CelularImage src={celular} alt="" />
        </S.App>
      </S.BoxApp>
    </S.Header>
  )
}
 
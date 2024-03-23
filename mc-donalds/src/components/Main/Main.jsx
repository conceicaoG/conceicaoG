import Card from'./Card'
import pessoa from '../../assets/main/pessoa.png'
import loja from '../../assets/main/loja.png'
import sofa from '../../assets/main/sofa.png'
import sorvete from '../../assets/main/sorvete.png'
import batata from '../../assets/main/batata.png'
import mac from '../../assets/main/mac.png'
import * as S from './main_styled'
import React, { useState } from 'react';

export default function Main() {
  const [item, setItem] = useState(mac)

    function bigmac(){
        setItem(mac)
    }
     function batataFrita(){
        setItem(batata)
    }
     function casquinha(){
        setItem(sorvete)
    }

  return (
    <main>
      <section>
        <S.Principal>
          <div className='maior'>
            <img src={item} alt="" />
            <div className='fome'>
              <p>
                BATEU AQUELA <span className="fome-highlight">FOME</span> DE <span className="fome-highlight">#MÉQUI</span>?
              </p>
            </div>
          </div>
          <figure>
            <img onClick={bigmac} src={mac} alt="" />
            <img onClick={batataFrita} src={batata} alt="" />
            <img onClick={casquinha} src={sorvete} alt="" />
          </figure>
        </S.Principal>
      </section>
        <S.Promocao>
          <h2>Promoção</h2>
          <S.Center>
            <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"} />
            <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
            <Card imagem={pessoa} texto={"Confira as medidas que o Méqui adotou!"} />
          </S.Center>
        </S.Promocao>
    </main>
  )
}

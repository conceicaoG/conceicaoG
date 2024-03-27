import styled, {css} from 'styled-components'

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Promocao = styled.section`
background-color: #FEB706;
height: auto;
${center}
flex-direction: column;
justify-content: space-around;
padding-top: 40px;
padding-bottom: 50px;
h2{
    color: white;
}
`

export const Center = styled.div`
width: 80vw;
${center}
justify-content: space-around;
`

export const Card = styled.div`
//heidth: 10px
width: 270px;
margin: 10px;
text-align: center;
background-color: white;
border-radius: 13px;
padding: 20px;
img {
    max-width: 100%;
    height: auto;
  }
p{
   height: 9vh;
   margin-top: 10px;
   font-size: 1rem;
   font-weight: bold;
   text-align: left;
   ${center}
}
button{
    background-color: #FFBC0D;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
}
`
export const Principal = styled.div`
  width: 100%;
  background-color: #FFC72C;
  ${center}
  flex-direction: column;
  padding-bottom: 50px;
  padding-top: 40px;


  .maior {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  .maior img {
    width: 20vw;
    height: 30vh;
    margin-left: 150px;
    margin-right: 175px;
    cursor: pointer;
  }

  .fome p {
    color: white;
    font-weight: bold;
    margin-right: 200px;
    margin-left: 300px;
    font-size: 30px;
    padding: 3px;
  }

  .fome p span.fome-highlight {
    color: red;
  }

  figure {
    display: flex;
    justify-content: center;
    justify-content: space-around;
    margin-top: 20px;
  }

  figure img {
    width: 4vw;
    height: 10vh;
    cursor: pointer;
    margin: 0 10px;

  }

  figure img:not(:first-child) {
    margin-left: 80px;
  }
`;
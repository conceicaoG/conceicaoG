import {styled, createGlobalStyle, css} from 'styled-components'

export const globalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`
const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Header = styled.header`
${center}
justify-content: space-between;
padding-left: 60px;
height: 12vh;
`

export const LogoImage = styled.img`
  width: 12vh;
  height: auto; 
`;

export const BoxApp = styled.div`
width: 30vw;
${center}
justify-content: space-evenly;
`
export const App = styled.div`
border-radius: 10px;
width: 13vw;
height: 8vh;
${center}
justify-content: space-evenly;
cursor: pointer;
background-color: ${props => props.color};
p{
    font-size: 0.9rem;
}
`

export const AppText = styled.p`
  font-size: 0.9rem;
  margin-right: 1px;
`;

export const AppImage = styled.img`
  width: 20px;
  height: auto;
`;

export const CelularImage = styled.img`
  width: 20px;
  height: auto;
`;


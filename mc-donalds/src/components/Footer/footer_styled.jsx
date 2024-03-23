import styled,{css} from 'styled-components';

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Footer = styled.footer`
justify-content: space-between;
padding-left: 60px;
height: 12vh;
${center}
`
export const Logo = styled.section`
  display: flex;
  align-items: center;
  margin-right: 700px;

  img {
    margin-right: 10px;
    width: 5vh;
    height: auto; 
  }
`;

export const Apps = styled.section`
  align-items: center;
  display: flex;
  margin-right: 30px;
  border-radius: 10px;
  cursor: pointer;

  img {
    margin-left: 50px;
  }
`;
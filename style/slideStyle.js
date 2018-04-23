import styled from 'styled-components';

const Top = styled.div`
  width: 100vw;
  height: 10vmin;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Bottom = styled.div`
  width: 100vw;
  height: 10vmin;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
`;

const Left = styled.div`
  width: 10vmin;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;


const Right = styled.div`
  width: 10vmin;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
`;

export default { Top, Bottom, Left, Right };
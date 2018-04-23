import styled from 'styled-components';

const Outer = styled.div`
  position: fixed;
  top: 10vmin;
  left: 10vmin;
  width: calc(100vw - 20vmin);
  height: calc(100vh - 20vmin);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const Inner = styled.div`
  text-align: center;
`;

export default { Outer, Inner };
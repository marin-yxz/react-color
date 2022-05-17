import styled from 'styled-components';

export const DivBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  animation-name: hor-movement, ver-movement;
  animation-duration: 3.141s, 1.414s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
`;
export const DivMain1 = styled.div`
  border: 10px solid #f72585;
  position: absolute;
  margin: 130px 300px 20px -35px;
  width: 350px;
  height: 350px;
  @keyframes hor-movement {
    from {
      margin-left: 0%;
      background: blue;
    }
    to {
      margin-left: calc(100% - 30px);
      background: red;
    }
  }

  @keyframes ver-movement {
    from {
      background: blue;
      margin-top: 0%;
    }
    to {
      background: red;
      margin-top: calc(100% - 30px);
    }
  }
`;

export const Button = styled.button`
  color: black;
  font-size: 1em;
  background-color: white;
  margin: 2em;
  padding: 0.5em 1em;
  border: 2px black;
  border-radius: 3px;
  margin: auto;
  width: 200px;
  z-index: 1;
  opacity: 70%;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
    color: rgba(0, 0, 0, 0.8);
  }
`;
export const BoxColored = styled.div`
  color: white;
  height: 50px;
  width: auto;
  border-radius: 15px 15px 0px 0px;
  text-align: center;
  text-shadow: 3px 3px black;
  z-index: 1;
`;
export const H1 = styled.h1`
  padding: 5px;
  text-align: center;
  z-index: 1;
`;
export const Input = styled.input`
  text-align: center;
  z-index: 1;
`;
export const DivMain = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-style: solid;
  border-image: linear-gradient(to right, pink, blue) 1;
  background-color: white;
  margin: auto;
  padding: 20px 15px 20px 15px;
  border-radius: 15px;
  display: flex;
  width: 300px;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
`;
export const H2 = styled.h2`
  text-align: center;
  vertical-align: middle;
  line-height: 10px;
  z-index: 1;
`;
export const ImageDiv = styled.img`
  margin: auto;
  position: absolute;
  width: 300px;
  height: 200px;
  border-radius: 15px 15px 0px 0px;
  z-index: 0;
  /* right: 47.8%; */
  opacity: 100%;
  object-fit: contain;
`;

import randomColor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';
import Randomcol from './functions';

export default function State() {
  const [color, setColor] = useState(randomColor);
  const [hue, setHue] = useState('');
  const [lumo, setlumo] = useState('');

  const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 2em;
    padding: 0.5em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    margin: auto;
    width: 200px;
  `;
  const BoxColored = styled.div`
    background-color: ${color};
    color: white;
    height: 50px;
    width: auto;
  `;
  const Input = styled.input``;
  const DivMain = styled.div`
    font-family: sans-serif;
    font-size: 10px;
    border-style: solid;
    background-color: white;
    margin: auto;
    padding: 20px 15px 20px 15px;
    border-radius: 15px;
    display: flex;
    width: 400px;
    flex-direction: column;
    justify-content: space-around;
  `;
  const H2 = styled.h2`
    margin-block-start: auto;
    margin: auto;
    padding: 50px;
  `;

  return (
    <>
      <DivMain>
        <BoxColored
          className="App"
          style={{
            transition: ' background-color s ease',
          }}
        ></BoxColored>

        <Input
          placeholder="hue"
          value={hue}
          onChange={(event) => {
            setHue(event.currentTarget.value);
            Randomcol(hue, lumo);
          }}
        />

        <Input
          placeholder="luminosity"
          value={lumo}
          onChange={(event) => {
            setlumo(event.currentTarget.value);

            Randomcol(hue, lumo);
          }}
        />
        <H2>Color generated:{color}</H2>
        <Button
          onClick={() => {
            setColor(Randomcol(hue, lumo));
          }}
        >
          Generate
        </Button>
      </DivMain>
    </>
  );
}

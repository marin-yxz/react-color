import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import Randomcol from './functions';
import {
  BoxColored,
  Button,
  DivBox,
  DivMain,
  DivMain1,
  H1,
  H2,
  ImageDiv,
  Input,
} from './styled.js';

function App() {
  const [color, setColor] = useState(randomColor);
  const [hue, setHue] = useState('');
  const [lumo, setlumo] = useState('');
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState('hidden');
  const [true1, setTrue1] = useState(false);
  return (
    <>
      <H1>color picker and randomizer.</H1>

      <DivMain
        style={{
          borderStyle: !true1 ? `solid` : `none`,
        }}
      >
        <ImageDiv
          style={{
            backgroundColor: color,
            transition: 'all 1s ease',
            WebkitTransition: 'all 1s ease',
            MozTransition: 'all 1s ease',
            opacity: '50%',
            display: !true1 ? `` : `none`,
          }}
        />
        <BoxColored
          className="App"
          style={{
            backgroundColor: color,
            transition: 'all 1s ease',
            WebkitTransition: 'all 1s ease',
            MozTransition: 'all 1s ease',
            display: !true1 ? `` : `none`,
          }}
        >
          <H2
            style={{
              display: !true1 ? `` : `none`,
            }}
          >
            Color generated:{color}
          </H2>
        </BoxColored>

        <Input
          placeholder="hue"
          value={hue}
          onChange={(event) => {
            setHue(event.currentTarget.value);
            Randomcol(hue, lumo);
          }}
          style={{
            display: !true1 ? `` : `none`,
          }}
        />

        <Input
          placeholder="luminosity"
          value={lumo}
          onChange={(event) => {
            setlumo(event.currentTarget.value);

            Randomcol(hue, lumo);
          }}
          style={{
            display: !true1 ? `` : `none`,
          }}
        />

        <Button
          onClick={() => {
            setCounter(counter + 1);
            setColor(Randomcol(hue, lumo));
          }}
          style={{ display: !true1 ? `` : `none` }}
        >
          Generate
        </Button>
        <DivMain1
          style={{
            visibility: display !== 'hidden' ? `visible` : `${display}`,
          }}
        >
          {' '}
          <DivBox></DivBox>
        </DivMain1>
        <Button
          onClick={() => {
            setTrue1(!true1);
            setDisplay(true1 ? 'hidden' : 'visible');
            console.log(display);
          }}
        >
          Show Box
        </Button>
      </DivMain>
    </>
  );
}

export default App;

import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function Randomcol(hue, lum) {
  console.log(hue, lum);
  const color = randomColor({
    hue: hue,
    luminosity: lum,
  });
  return color;
}

function App() {
  const [color, setColor] = useState(randomColor);
  const [hue, setHue] = useState('');
  const [lumo, setlumo] = useState('');
  return (
    <div>
      <div
        className="App"
        style={{
          transition: 'background-color 5s ease',
          backgroundColor: color,
          color: 'white',
          height: '200px',
        }}
      >
        <h1>
          <button
            onClick={() => {
              setColor(Randomcol());
            }}
          >
            Generate
          </button>
        </h1>
        <h2>Color generated:{color}</h2>
        <h2>
          <input
            placeholder="hue"
            value={hue}
            onChange={(event) => {
              setHue(event.currentTarget.value);
              Randomcol(hue, lumo);
            }}
          />
          <input
            placeholder="luminosity"
            value={lumo}
            onChange={(event) => {
              setlumo(event.currentTarget.value);

              Randomcol(hue, lumo);
            }}
          />
          <button
            onClick={() => {
              setColor(Randomcol(hue, lumo));
            }}
          >
            Generate specified color
          </button>
        </h2>
      </div>
    </div>
  );
}

export default App;

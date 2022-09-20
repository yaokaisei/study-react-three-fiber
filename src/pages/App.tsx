import React, { useState } from 'react';
import 'src/styles/App.css';
import BoxModel from 'src/components/BoxModel';

const App = () => {
  const [colorCode, setColorCode] = useState('#5a40ce');
  const [scale, setScale] = useState(1);

  return (
    <div className="App">
      <div className="box-contents">
        <h1>
          BOX
          <br />
          Geometry
        </h1>

        <label>
          Box color
          <input
            type="color"
            value={colorCode}
            onChange={(event) => setColorCode(event.target.value)}
          />
        </label>

        <label>
          Box Scale
          <input
            type="number"
            min="1"
            max="3"
            step="0.1"
            value={scale}
            onChange={(event) => setScale(Number(event.target.value))}
          ></input>
        </label>
      </div>

      <div className="box-bg">
        <BoxModel color={colorCode} scale={scale} />
      </div>
    </div>
  );
};

export default App;

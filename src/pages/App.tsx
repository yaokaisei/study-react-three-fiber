import React from 'react';
import 'src/styles/App.css';
import BoxModel from 'src/components/BoxModel';

const App = () => {
  return (
    <div className="App">
      <div className="box-contents">
        <h1>
          BOX
          <br />
          Geometry
        </h1>

        <label>
          color code
          <input type="text" />
        </label>
      </div>

      <div className="box-bg">
        <BoxModel />
      </div>
    </div>
  );
};

export default App;

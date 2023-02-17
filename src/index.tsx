import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'src/index.css';
import { RecoilRoot } from 'recoil';

import Top from 'src/top/pages/Top';
import BoxCustomizer from 'src/boxCustomizer/pages/BoxCustomizer';
import { TopMyAj1, Gotem } from 'src/myAj1/pages';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/box-customizer" element={<BoxCustomizer />} />
          <Route path="/my-aj1" element={<TopMyAj1 />} />
          <Route path="/my-aj1/gotem" element={<Gotem />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

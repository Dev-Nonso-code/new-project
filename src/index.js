import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import Start from './Start'
import Signup from './Components/Body component/Signup';
import Home from './Components/Body component/Home';
// import Home from './Components/Body component/Home';
import Contact from './Components/Body component/Contact';
import Notfund from './Components/Body component/Notfund';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  //   <Start />
  //   <Notfund />
  //   <Home />
  // </React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
      {/* <Route index element={<Home />} /> */}
      <Route path="blogs" element={<Start />} />
      <Route path="contact" element={<Contact />} />
      <Route path="contacts" element={<App />} />
      <Route path="signup" element={<Signup />} />
     
    
    <Route path="*" element={<Notfund />} />
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

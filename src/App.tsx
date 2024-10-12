import { useEffect, useState } from 'react';
import './App.css';
import PreLoader from './PreLoder';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';

function App() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => setShow(false), 3500);
  }, []);
  return (
    <div>
      <PreLoader show={show} />
      <div className="nav">
        <img src={'./logo.svg'} className="logo" alt="Vite logo" />
        <button
          className="btn2 mr-auto"
        >
          Login
        </button>
      </div>
      <nav className="non-collapsed">
        <div>
          <img src={'./logo.svg'} className="logo" alt="Vite logo" />
        </div>
        <div className="app-head">
          <a href='#' data-tooltip-id="home-tooltip"  id="home" data-tooltip-content="Home"></a><Tooltip id="my-tooltip" />
          <a id="sol"></a>
          <a id="page"></a>
          <a id="about"></a>
        </div>
        <div>
          {' '}
          <button className="btn2">Login</button>
        </div>
      </nav>
      <h1>Zero Tools</h1>
      <p>
        Potential of your applications with our robust suite of APIs designed to
        streamline your workflow and enhance your solutions.
      </p>
      <div className="card">
        <button className="btn1" >
          Get Started
        </button>
        <button className="btn2" >
          Docs
        </button>
      </div>
      <p className="read-the-docs">

      Copyright © {new Date().getFullYear()} Muath Alzoubi®. All rights reserved.
      </p>
    </div>
  );
}

export default App;

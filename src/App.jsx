import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Clockheading from './components/clockheading';
import Clockslogan from './components/currentslogan';
import Clocktime from './components/clocktime';

function App() {
 
  return <div>
    <center>
    <Clockheading></Clockheading>
    <Clockslogan></Clockslogan>
    <Clocktime></Clocktime>
    </center>

          
  </div>
}

export default App;

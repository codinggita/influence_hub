import React, { useState } from 'react';
import ComponentOne from './html/ComponentOne';
import ComponentTwo from './html/ComponentTwo';
import './App.css'
import { Button } from '@mui/material';
import Box_1 from './html/Box_1';
import Navbar from './html/Navbar'
import Footer from './html/Footer';

const App = () => {
  const [showComponentOne, setShowComponentOne] = useState(true); // Set to true by default
  const [showComponentTwo, setShowComponentTwo] = useState(false);

  const handleButtonClick = (componentNumber) => {
    if (componentNumber === 1) {
      setShowComponentOne(true);
      setShowComponentTwo(false);
    } else if (componentNumber === 2) {
      setShowComponentOne(false);
      setShowComponentTwo(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="box-1">
        <Box_1 />
      </div>
      <div className="main-app-class">
        <div className="compo-logic-1">
          <Button id="btn9" variant='contained' onClick={() => handleButtonClick(1)}>How to hire influencer</Button>
          <Button id="btn10" variant='contained' onClick={() => handleButtonClick(2)}>How to contact team</Button>
        </div>

        {showComponentOne && <ComponentOne />}
        {showComponentTwo && <ComponentTwo />}

      </div>
      <Footer />
    </div>

  );
};


export default App;
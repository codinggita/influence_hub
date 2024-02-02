import React, { useState } from 'react';
import ComponentOne from './html/ComponentOne';
import ComponentTwo from './html/ComponentTwo';
import './App.css'
import { Button } from '@mui/material';
import Box_1 from './html/Box_1';

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
      <Box_1/>
      <div class="main-app-class">
        <div class="compo-logic-1">
          <Button id="btn9" varient='contained' onClick={() => handleButtonClick(1)}>Show Component One</Button>
          <Button id="btn10" varient='contained' onClick={() => handleButtonClick(2)}>Show Component Two</Button>
        </div>

        {showComponentOne && <ComponentOne />}
        {showComponentTwo && <ComponentTwo />}
      </div>
    </div>
  );
};
export default App;
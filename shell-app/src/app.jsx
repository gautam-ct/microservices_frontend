import React from 'react';
import { useState } from 'react';

import Style from './style.css';


import AppFromMF1 from 'mf1/App';

import AppFromMF2 from 'mf2/App';

const App = () => {

  const [countCompleted, setCountCompleted] = useState(0);
  const [countIncompleted, setCountIncompleted] = useState(0);

  return (
    
        <div>
      <div className='shell'>
        <h1>Shell Application</h1>
     
      </div>
      <AppFromMF1
        countCompleted={countCompleted}
        setCountCompleted={setCountCompleted}
        countIncompleted={countIncompleted}
        setCountIncompleted={setCountIncompleted}
      />
      <AppFromMF2
        countCompleted={countCompleted}
        countIncompleted={countIncompleted}
      />
    </div>
  

    
  );
};

export default App;
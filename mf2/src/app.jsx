import React, { useContext } from 'react';

import Style from './style.css';


const App = ({countCompleted , countIncompleted}) => {


  // const [count_completed , count_incompleted] = useContext(SharedContext);
  return (
    <div>
      <div className={'mf2'}>
      

        <p>Completed_task : {countCompleted}</p>
        <p>Incompleted_task : {countIncompleted}</p>
      </div>
      
    </div>
    
  );
};

export default App;
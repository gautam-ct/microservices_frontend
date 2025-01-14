import React, { useContext } from 'react';

import './style.css';


const App = ({countCompleted , countIncompleted , showResults }) => {


  // const [count_completed , count_incompleted] = useContext(SharedContext);
  return (
    <div>
      {/* Other content */}
      {showResults && (
        <div className="results-container">
          <div className="mf2">
            <p>Completed Task: {countCompleted}</p>
            <p>Incompleted Task: {countIncompleted}</p>
          </div>
        </div>
      )}
    </div>
  );
  
  
};

export default App;
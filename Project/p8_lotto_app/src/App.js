import React from 'react'

import Lottery from "./Lottery";

function App() {
  return (
    <div>
      <Lottery />
      <Lottery title={"Mini Daily"} maxBall={4} maxVal={20}/> 
    </div>
  );
}

export default App;

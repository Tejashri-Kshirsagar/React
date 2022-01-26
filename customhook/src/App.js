import React from 'react'
import useDecrement from './new'
function App() {
  const c=useDecrement();
  return(
    <div>
      <h1>{c.a}</h1>
      <button onClick={c.Decrement}>Decrease</button>
    </div>
  );
}
export default App;

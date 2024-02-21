import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {console.log("hello from useEffect")});

  return (
    <>

    <button onClick = {() => setCount((count) => count + 1 )}>
              count is {count}

    </button>
      
    </>
  );
}

export default App


import React, {useState, useEffect} from 'react';
import { getAPIs } from '../../apiCalls.js'
import './App.css';


function App() {
  const [beerList, setBeerList] = useState([]);

  useEffect(() => {
    getAPIs().then(data => setBeerList(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;

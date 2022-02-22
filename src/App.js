import logo from './images/holy-bible.png';
import generateVerse from './features/helpers/bibleVerses';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const verse = useState('')

  const getverse=()=>{
    fetch(`https://bible-api.com/${generateVerse()}`)
    .then(response => response.json)
    .then(data => setverse(`${data.text} -${data.reference}`))
  }

  useEffect(()=>{
    getverse()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <p>
          {verse}
        </p>
        <button onClick={()=>getverse}>New Verse</button>
      </header>
    </div>
  );
}

export default Ap;

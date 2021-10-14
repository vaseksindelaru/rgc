import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  // useEffect (() => {axios.get()})
  const [notes,setNotes] = useState ([])
  const [newNotes,setNewNotes] = useState('')
  const [loading,setLoading] = useState (false)


 /*  useEffect(()=> {
    console.log('useEffect');
    setLoading(true);

    setTimeout(()=>{
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => res.json())
    .then(json => {
       console.log('seteando las notas');
       setNotes(json);
       setLoading(false);
      })
    },2000);
  },[]) */

  
  return (
    <div className="App">
     <h2>RGC</h2> 
     <p>{setNotes}</p>
    </div>
  );
}

export default App;

import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  useEffect (() => {axios.get()})
  
  return (
    <div className="App">
     <h2>RGC</h2> 
    </div>
  );
}

export default App;

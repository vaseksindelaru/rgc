
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Coin} from './coin.js';
import './App.css';


function App() 
{

 
  const [notes,setNotes] = useState ([]);
  const [newNotes,setNewNotes] = useState('')

  useEffect(()=>
  {
   console.log('useEffect')
   axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then ((res)=>{
      setNotes(res.data)
      console.log(res)})
  },[])
 
  const handelChange = (evento) => 
  {
   setNewNotes(evento.target.value)
  }
 
 const handleSubmit = (event) => 
  {
   event.preventDefault()
   const notesToAdd = {id: notes.length + 1, content: newNotes, important: Math.random() <0.5};
   setNotes( (prevNotes)=>prevNotes.concat(notesToAdd))
   setNewNotes('')
  }
   
  return (
    <div>
    <h2 className='logo'>RGC</h2> 
    <div>{notes.map(note => <Coin key={note.id} 
     name={note.name}
     id={note.id} 
     symbol={note.symbol} 
     image={note.image} />)}</div> 
    <form onSubmit={handleSubmit}>
     <input type='text' onChange={handelChange} value={newNotes}></input>
     <button>crear notas</button>
    </form>
    </div>
    ); 
}

export default App;

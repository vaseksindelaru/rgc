import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {Note} from './Note'



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
    <h2>RGC</h2> 
    <div>{notes.map(note => <Note key={note.id} id={note.id} symbol={note.symbol} image={note.image}/>)}</div> 
    <form onSubmit={handleSubmit}>
     <input type='text' onChange={handelChange} value={newNotes}></input>
     <button>crear notas</button>
    </form>
    </div>
    ); 
}

export default App;

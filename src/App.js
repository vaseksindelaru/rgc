import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {Note} from './Note'

function App() 
{

  // useEffect (() => {axios.get()})
  const [notes,setNotes] = useState ([]);
  const [newNotes,setNewNotes] = useState('')
  
  const handelChange = (evento) => {
 setNewNotes(evento.target.value)}
 
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
    <div>{notes.map(note => <Note key={note.id} id={note.id} content={note.content} />)}</div> 
    <form onSubmit={handleSubmit}>
     <input type='text' onChange={handelChange} value={newNotes}></input>
     <button>crear notas</button>
    </form>
    </div>
    ); 
}

export default App;

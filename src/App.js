import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {Note} from './Note'





function App(props) {
  // useEffect (() => {axios.get()})
  const [notes,setNotes] = useState (props.notesProps);
  const [newNotes,setNewNotes] = useState('')
 

  const handelChange = (evento) => {
    setNewNotes(evento.target.value)}
  
    const handelClick = (evento) => {
  console.log('creando notas');
  const notesToAdd = {id: notes.length + 1, content: newNotes};
  console.log(notesToAdd)
  setNotes(notes.concat(notesToAdd))
  setNewNotes('')
  };
  
  /*  const [loading,setLoading] = useState (false)
    useEffect(()=> {
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
  },[]) 
 */
  
  return (
    <div className="App">
     
     <h2>RGC</h2> 
     <div>{notes.map(note => <Note key={note.id} id={note.id} content={note.content} />)}</div> 
     
     <div>
     <input type='text' onChange={handelChange} value={newNotes}></input>
     <button onClick={handelClick}>crear notas</button>
     </div>
    
    </div>
  );
}

export default App;

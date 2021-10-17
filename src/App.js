import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {Note} from './Note'





function App(props) {
  // useEffect (() => {axios.get()})
  const [notes,setNotes] = useState (props.notesProps);
  const [newNotes,setNewNotes] = useState('')
  const [showAll,setShowAll] = useState(true)
 

  const handelChange = (evento) => {
   
    setNewNotes(evento.target.value)}
  
  const handelSubmit = (event) => {
    event.preventDefault()  
    console.log('creando notas');
    const notesToAdd = {id: notes.length + 1, content: newNotes, important: Math.random() <0.5};
    console.log(notesToAdd)
    setNotes(notes.concat(notesToAdd))
    setNewNotes('')
  };
  
  /* bootcamp: const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important) */ 
  
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
const handelShowAll=()=>{setShowAll(()=>!showAll)}
  return (
    <div className="App">
     {/*  bootcamp: <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> 
      <ul>
      {notesToShow.map(note =>
          <Note key={note.id} note={note} />)}
      </ul>   */} 
     <h2>RGC</h2> 
    <button onClick={handelShowAll}>{showAll ? 'show only important' : 'show all'}</button>
     <div>{notes
     .filter(note=>{if(showAll===true) return note ; return note.important})
     .map(note => <Note key={note.id} id={note.id} content={note.content} />)}</div> 
     
     <form onSubmit={handelSubmit}>
     <input type='text' onChange={handelChange} value={newNotes}></input>
     <button>crear notas</button>
     </form>

     </div>
    ); 
  }

export default App;

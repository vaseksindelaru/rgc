import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'


const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

const Note =({id,content}) => { return (
<strong>
<p>{id}</p>
<p>{content}</p>
</strong>)}

function App() {
  // useEffect (() => {axios.get()})
  /* const [notes,setNotes] = useState ([])
  const [newNotes,setNewNotes] = useState('')
  const [loading,setLoading] = useState (false)


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
    <p>{notes.map(note=> <Note key={note.id} id={note.id} content={note.content} />)}
    </p> 
    </div>
  );
}

export default App;

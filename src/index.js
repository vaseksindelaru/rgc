import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { json } from 'stream/consumers';

const http = require('http')

 const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end(json.stringify(App))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`) 




ReactDOM.render(<App />,document.getElementById('root'));




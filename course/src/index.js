import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App';

// const promise = axios.get('http://localhost:3001/persons')
// console.log(promise) -- it is not working

// ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>);;

const promise = axios.get('http://localhost:3001/persons')
console.log(promise)   //---but with it all begins working

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     date: '2019-05-30T17:30:31.098Z',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     date: '2019-05-30T18:39:34.091Z',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     date: '2019-05-30T19:20:14.298Z',
//     important: true
//   }
// ]

ReactDOM.createRoot(document.getElementById('root')).render(
<App/>)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';

function Home(){
  return(
    <div>
      <h2>Home</h2>
      home
    </div>
  )
}
var contents = [
  {id : 1, title:"HTMl", desc : "HTML is ..."},
  {id : 2, title:"CSS", desc : "CSS is ..."},
  {id : 3, title:"JavaScript", desc : "JavaScript is ..."},
];
function Topics(){
  var lst = [];
  for (var i=0; i<contents.length; i++){
    lst.push(
      <li key={contents[i].id}><NavLink to={'./' + contents[i].id}>{contents[i].title}</NavLink></li>
    )
  }
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        {lst}
      </ul>
      <Routes>
        <Route path=":topicId" element={<Topic />} />       
      </Routes>
    </div>
  )
}
function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact
    </div>
  )
}
function NotFound(){
  return(
    <div>
      <h2>NotFound</h2>
      NotFound
    </div>
  )
}
function Topic(){
   var {topicId} = useParams();
  var selected_topic = {
    title : 'Sorry',
    desc : 'Not Found'
  }
  for (var i=0; i<=contents.length; i++){
    if(contents[i].id === Number(topicId)){
      selected_topic = contents[i];
      break;
    }
  }
  return(
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.desc}
    </div>
  )
}
function App(){
 
  return(
    <div>
      <div>Hello React Router Dom</div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topics/*' element={<Topics />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

ReactDOM.render(<HashRouter basename='/'><App /></HashRouter>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

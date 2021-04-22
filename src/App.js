import logo from './logo.svg';
import './App.css';
import  Counter from "./components/counter";

import { Route,Switch,Link,BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Profiler } from 'react';

function App() {
  return (
  <div>
      <Counter title="counter 1" value={1} image="images/yahya.jpg"/>
      <Counter title="counter 2" value={2} image="images/yahya.jpg"/>
      </div>
  );
}

export default App;

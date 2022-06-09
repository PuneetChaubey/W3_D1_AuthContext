import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Display from './components/Display';
import {Routes, Route} from "react-router-dom"
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/display' element={<Display/>}/>
      </Routes>
     
    </div>
  );
}

export default App;

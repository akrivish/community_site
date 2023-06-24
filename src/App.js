import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './Pages/HomePage.js';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <div id='page-body'>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
      </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

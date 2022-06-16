import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import FirstPage from './Components/Firstpage';
import Secondpage from './Components/Secondpage';
import Thirdpage from './Components/Thirdpage';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage/>}/>
          <Route path='/second' element={<Secondpage/>}/>
          <Route path='/third' element={<Thirdpage/>}/>
        </Routes>
      </Router>
      
      
       
      
      
    </div>
  );
}

export default App;

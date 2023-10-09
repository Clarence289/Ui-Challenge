
import React from 'react';
import './App.css'; 
import Image from './components/Image'; 
import Header from './components/Header';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="App">
     
      <Image />
      <Header/>
      <Sidebar/>
      
    </div>
  );
}

export default App;

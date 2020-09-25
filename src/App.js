import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
     {/* <Dinner></Dinner> */}
     <Dinner dishName= "Khorma" sweetDish= "kheer"/> 
     <hr/>
     <Dinner dishName= "Pasta" sweetDish= "puding"/> 
     <hr/>
     <Dinner dishName= "Biryani" sweetDish= "cake"/> 
    </div>
  );
}

export default App;

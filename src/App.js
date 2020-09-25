import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
     {/* <Dinner></Dinner> */}
     <Dinner dishName= "Chicken Biryani" sweetDish= "kheer"/> 
     <hr/>
     <Dinner dishName= "Chicken Pilaao" sweetDish= "custurd"/> 
     <hr/>
     <Dinner dishName= "Chicken Nihaari" sweetDish= "pastery"/> 
    </div>
  );
}

export default App;

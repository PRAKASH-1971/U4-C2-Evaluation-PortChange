import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import React,{ useState } from "react";

function App() {
  const [house,setHouse] = useState(false)
  const [shouse,setShouse] = useState(false)

 const showform = () =>{
   setHouse(true)
   setShouse(false)
 }
 const showhouse = () =>{
   setHouse(false)
   setShouse(true)
 }
 
  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>showform()} >Add House
        {/* Show text Add House or Show Rentals based on state */}
      </button>
        {house ? <AddHouse setHouse={setHouse}/> : null}
        {shouse ? <Rentals/> : null}
      <br />
      <button className="toggleForm" onClick={()=>showhouse()}>Show House
        {/* Show text Add House or Show Rentals based on state */}
      </button>
    </div>
  );
}

export default App;

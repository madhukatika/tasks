import './App.css';
import GraphData from './Components/GraphData';
import SearchComponent from './Components/SearchData';

import Gdata from './Components/GobalContext';
import { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import DateTimePicker from './Components/scrollbar';





function App() {
  let update=(data)=>{
    setGdata({...gdata,"lineGraph":[...gdata.lineGraph,...data]})
  }
  let [gdata,setGdata]=useState({"update":update,"lineGraph":[]})
  console.log("from app",gdata)
  return (
    <div style={{'backgroundColor':'bisque','height':'150vh'}}>
    <>
    

{/* <Gdata.Provider value={gdata}>

 <SearchComponent/>
 <GraphData/>
 </Gdata.Provider> */}
 
<DateTimePicker/>





 
  </>
  </div>
   
  );
}

export default App;

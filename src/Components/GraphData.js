// import React, { useContext, useEffect, useState } from 'react';
// import LineGraph from "../Components/LineGraph";
// import Gdata from './GobalContext';

// const GraphData = () => {
//   let [lineGraphData,setLineGraph]=useState([])
//   let gdata=useContext(Gdata)
//     useEffect(()=>{
//       setLineGraph([...gdata.lineGraph])
//      },[gdata.lineGraph])

//   return (
    
//     <div className='graph-display'>
//       <h1>Graph</h1>
//        <div className="graph-container"> 
//       <LineGraph lineGraph={lineGraphData} />
//     </div>
//     </div>
//   );
// };

// export default GraphData;

import React, { useContext, useEffect, useState } from 'react';
import LineGraph from "../Components/LineGraph";
import Gdata from './GobalContext';


const GraphData = () => {
  let [lineGraphData, setLineGraph] = useState([]);
  let gdata = useContext(Gdata);

  useEffect(() => {
    setLineGraph([...gdata.lineGraph]);
  }, [gdata.lineGraph]);

  return (
    <div className='graph-display'>
      <h1 className='graph-title'>Graph</h1>
      <div className="graph-container">
        <LineGraph lineGraph={lineGraphData} />
      </div>
    </div>
  );
};

export default GraphData;


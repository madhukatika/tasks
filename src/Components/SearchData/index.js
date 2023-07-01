// import React, { useState, useEffect, useContext } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import mergeData from "../../json_data/merged_file.json";
// import Displaytable from "../Displaytable";
// import Gdata from "../GobalContext";
// import { Slide, Slider } from '@mui/material';

// const SearchComponent = () => {
//   let gdata = useContext(Gdata);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     performSearch(searchTerm, selectedDate, selectedTime);
//   }, [searchTerm, selectedDate, selectedTime]);

//   useEffect(() => {
//     gdata.update(graph);
//   }, [searchResults]);

//   const handleSearch = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleTimeChange = (e) => {
//     const time = e.target.value;
//     setSelectedTime(time);
//   };
//   const performSearch = (term, date, time) => {
//     const results = mergeData.filter((item) => {
//       if (item?.thermostatPacket?.info && item?.thermostatPacket?.config && item?.thermostatPacket?.data && item?.thermostatPacket?.settings) {
//         const { product, id } = item.thermostatPacket.info;
//         const { programMode } = item.thermostatPacket.config;
//         const { hvacMode } = item.thermostatPacket.settings;
//         const timestamp = new Date(item.thermostatPacket.data.timestamp);

//         if (!date && !time) {
//           // When no date and time are selected, include all items
//           return (
//             product?.toLowerCase()?.includes(term?.toLowerCase()) ||
//             programMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
//             hvacMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
//             id?.toLowerCase()?.includes(term?.toLowerCase())
//           );
//         } else if (date && !time) {
//           // When only date is selected, filter by date
//           return (
//             (product?.toLowerCase()?.includes(term?.toLowerCase()) ||
//             programMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
//               hvacMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
//               id?.toLowerCase()?.includes(term?.toLowerCase())) &&
//             timestamp.toDateString() === date.toDateString()
//           );
//         } else if (!date && time) {
//           // When only time is selected, filter by time
//           return (
//             (product?.toLowerCase()?.includes(term?.toLowerCase()) ||
//             programMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
//               hvacMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
//               id?.toLowerCase()?.includes(term?.toLowerCase())) &&
//             timestamp.toISOString().split("T")[1].startsWith(time)
//           );
//         } else {
//           // When both date and time are selected, filter by date and time
//           const selectedDateTime = new Date(date.toDateString() + " " + time);
//           return (
//             (product?.toLowerCase()?.includes(term?.toLowerCase()) ||
//             programMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
//               hvacMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
//               id?.toLowerCase()?.includes(term?.toLowerCase())) &&
//             timestamp.getTime() === selectedDateTime.getTime()
//           );
//         }
//       }
//     });

//     setSearchResults(results);
//   };
//   var graph = searchResults.map((item, index) => item.thermostatPacket);
//   return (
//     <div>
//       <div>
//       <input
//         style={{
//           width: "30%",
//           height: "3vh",
//           padding: "5px",
//           marginBottom: "5px",
//         }}
//         type="text"
//         className="search-bar"
//         placeholder="Search product"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <DatePicker
//         style={{ width: "30%", height: "3vh" }}
//         selected={selectedDate}
//         onChange={handleDateChange}
//         placeholderText="mm/dd/yyyy"
//         dateFormat="MM/dd/yyyy"
//       />
//             <input
//         style={{
//           width: "30%",
//           height: "3vh",
//           padding: "5px",
//           marginBottom: "5px",
//         }}
//         type="text"
//         className="search-bar"
//         placeholder="Search time (ISO format)"
//         value={selectedTime}
//         onChange={handleTimeChange}
//       />
//       <Slider sx={{maxWidth:'465px'}}
//   aria-label="Temperature"
//   defaultValue={0}
//   min={10}
//   // getAriaValueText={valuetext}

//   color="secondary"
// />

//   <div className="table-container">
//       <table className="custom_table">
//         <thead>
//           <tr>
//             <th>date</th>
//             <th>time</th>
//             <th>product</th>
//             <th>version</th>
//             <th>id</th>
//             <th>hvacMode</th>
//             <th>deadband10xF</th>
//             <th>outdoorTempLockout10xF</th>
//             <th>programMode</th>
//             <th>fanMode</th>
//             <th>numHeatStages</th>
//             <th>numCompressorStages</th>
//             <th>numHeatStages</th>
//             <th>smartSensorCnt</th>
//             <th>outdoorTemperature10xF</th>
//             <th>indoorTemperature10xF</th>
//             <th>outdoorHumidityPer</th>
//             <th>indoorHumidityPer</th>
//           </tr>
//         </thead>
//         {searchResults.map((item, index) => (
//           <Displaytable data={item} key={index} />
//         ))}
//       </table>
//       </div>
//       </div>

//     </div>
//   );
// };

// export default SearchComponent;

import React, { useState, useEffect, useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import mergeData from "../../json_data/merged_file.json";
import Displaytable from "../Displaytable";
import Gdata from "../GobalContext";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const SearchComponent = () => {
  let gdata = useContext(Gdata);
const [searchTerm, setSearchTerm] = useState("");
const [selectedDate, setSelectedDate] = useState(null);
const [selectedTime, setSelectedTime] = useState("");
const [searchResults, setSearchResults] = useState([]);
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    performSearch(searchTerm, startDate, endDate, selectedTime);
  }, [searchTerm, startDate, endDate, selectedTime]);

  useEffect(() => {
    gdata.update(graph);
  }, [searchResults]);

  const handleSearch = (e) => {
    const term = e.target.value;

    setSearchTerm(term);
  };

  const handleDateRangeChange = (values) => {
    setStartDate(new Date(values[0]));

    setEndDate(new Date(values[1]));

    console.log(startDate);

    console.log(endDate);
  };

  const handleDateChange = (date) => {

    setSelectedDate(date);

  };

  const handleTimeChange = (e) => {
    const time = e.target.value;

    setSelectedTime(time);
  };

  const performSearch = (term, startDate, endDate, time) => {
    const results = mergeData.filter((item) => {
      if (
        item?.thermostatPacket?.info &&
        item?.thermostatPacket?.config &&
        item?.thermostatPacket?.data &&
        item?.thermostatPacket?.settings
      ) {
        const { product, id } = item.thermostatPacket.info;
        const { programMode } = item.thermostatPacket.config;
        const { hvacMode } = item.thermostatPacket.settings;
        const timestamp = new Date(item.thermostatPacket.data.timestamp);

        if (!startDate && !endDate && !time) {
          // When no date range and time are selected, include all items

          return (
            product?.toLowerCase()?.includes(term?.toLowerCase()) ||
            programMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
            hvacMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
            id?.toLowerCase()?.includes(term?.toLowerCase())
          );
        } else if (!startDate && !endDate && time) {
          // When only time is selected, filter by time

          return (
            (product?.toLowerCase()?.includes(term?.toLowerCase()) ||
              programMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
              hvacMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
              id?.toLowerCase()?.includes(term?.toLowerCase())) &&
            timestamp.toISOString().split("T")[1].startsWith(time)
          );
        } else if (startDate && endDate && !time) {
          // When only date range is selected, filter by date range

          return (
            (product?.toLowerCase()?.includes(term?.toLowerCase()) ||
              programMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
              hvacMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
              id?.toLowerCase()?.includes(term?.toLowerCase())) &&
            timestamp >= startDate &&
            timestamp <= endDate
          );
        } else {
          // When both date range and time are selected, filter by date range and time

          const selectedDateTime = new Date(
            startDate.toDateString() + " " + time
          );

          return (
            (product?.toLowerCase()?.includes(term?.toLowerCase()) ||
              programMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
              hvacMode?.toLowerCase()?.includes(term?.toLowerCase()) ||
              id?.toLowerCase()?.includes(term?.toLowerCase())) &&
            timestamp >= startDate &&
            timestamp <= endDate &&
            timestamp.getTime() === selectedDateTime.getTime()
          );
        }
      }
    });

    setSearchResults(results);
  };

  var graph = searchResults.map((item, index) => item.thermostatPacket);

  return (
    <div>
      <div>
        <input
          style={{
            width: "30%",

            height: "3vh",

            padding: "5px",

            marginBottom: "5px",
          }}
          type="text"
          className="search-bar"
          placeholder="Search product"
          value={searchTerm}
          onChange={handleSearch}
        />

        <DatePicker

        style={{ width: "30%", height: "3vh" }}

        selected={selectedDate}

        onChange={handleDateChange}

        placeholderText="mm/dd/yyyy"

        dateFormat="MM/dd/yyyy"

      />

        <input
          style={{
            width: "30%",

            height: "3vh",

            padding: "5px",

            marginBottom: "5px",
          }}
          type="text"
          className="search-bar"
          placeholder="Search time (ISO format)"
          value={selectedTime}
          onChange={handleTimeChange}
        />

        {/* <Slider sx={{maxWidth:'465px'}}

  aria-label="Temperature"

  defaultValue={0}

  min={10}

  // getAriaValueText={valuetext}

  color="secondary"

/> */}

       

        <div>Start Date: {startDate.toDateString()}</div>

        <div>End Date: {endDate.toDateString()}</div>

        <Slider
          min={new Date(2022, 10, 7).getTime()}
          max={new Date(2022, 11, 3).getTime()}
          // defaultValue={[startDate.getTime(), endDate.getTime()]}
          onChange={handleDateRangeChange}
          range
          allowCross={false}
          style={{ width: "50%" }}
        />

      

        <div className="table-container">
          <table className="custom_table">
            <thead>
              <tr>
                <th>date</th>

                <th>time</th>

                <th>product</th>

                <th>version</th>

                <th>id</th>

                <th>hvacMode</th>

                <th>deadband10xF</th>

                <th>outdoorTempLockout10xF</th>

                <th>programMode</th>

                <th>fanMode</th>

                <th>numHeatStages</th>

                <th>numCompressorStages</th>

                <th>numHeatStages</th>

                <th>smartSensorCnt</th>

                <th>outdoorTemperature10xF</th>

                <th>indoorTemperature10xF</th>

                <th>outdoorHumidityPer</th>

                <th>indoorHumidityPer</th>
              </tr>
            </thead>

            {searchResults.map((item, index) => (
              <Displaytable data={item} key={index} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;

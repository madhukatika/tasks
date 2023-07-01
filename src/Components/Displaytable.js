
import ".././App.css"

let Displaytable=(props)=>{
   
   const data=props.data
    return(
       
        <tbody>
          <tr>
            <td>{data.thermostatPacket.data.timestamp.split("T")[0]}</td>
            <td>{data.thermostatPacket.data.timestamp.split("T")[1]}</td>
            <td>{data.thermostatPacket.info.product}</td>
            <td>{data.thermostatPacket.info.version}</td>
            <td>{data.thermostatPacket.info.id}</td>
             <td>{data.thermostatPacket.settings.hvacMode}</td>
            <td>{data.thermostatPacket.settings.deadband10xF}</td>
            <td>{data.thermostatPacket.settings.outdoorTempLockout10xF}</td> 
            <td>{data.thermostatPacket.config.programMode}</td>
            <td>{data.thermostatPacket.config.fanMode}</td>
            <td>{data.thermostatPacket.config.numFanStages}</td>
            <td>{data.thermostatPacket.config.numCompressorStages}</td>
            <td>{data.thermostatPacket.config.numHeatStages}</td>
            <td>{data.thermostatPacket.config.smartSensorCnt}</td>
            <td>{data.thermostatPacket.data.outdoorTemperature10xF}</td>
            <td>{data.thermostatPacket.data.indoorTemperature10xF}</td>
            <td>{data.thermostatPacket.data.outdoorHumidityPer}</td>
            <td>{data.thermostatPacket.data.indoorHumidityPer}</td>

          </tr>
         
        </tbody>
    )
}
export default Displaytable
import React from "react";
import "./cards.css";
import DisplayTable from '../DisplayTable'


export default function StateWiseData({stateData, state}) {
  //    Object.keys( stateData).length > 0 ? console.log(stateData):console.log("loading");

  let stateArray = [];

  const retrunStateDate = () => {
    //   console.log("in return state data");
    //   console.log(Object.keys(stateData));
    if (Object.keys(stateData).length > 0) {
      for (const State in stateData) {
        //   console.log(state);
        //   console.log(district);
        if (State === state) {
          // console.log("getting states data .............");
          stateArray = Object.keys(stateData[State].districtData).map((key) => {
            return {
              name:key,
              active: stateData[State].districtData[key].active,
              confirmed: stateData[State].districtData[key].confirmed,
              deaths: stateData[State].districtData[key].deceased,
              recovered: stateData[State].districtData[key].recovered,
              deltaConfirmed:
                stateData[State].districtData[key].delta.confirmed,
              deltaRecovered:
                stateData[State].districtData[key].delta.recovered,
              deltaDeaths: stateData[State].districtData[key].delta.deceased,
            };
          });
        }
      }
      // console.log(stateArray);
    }
  };

  retrunStateDate();

  return Object.keys(stateData).length > 0 ? (
    <DisplayTable data={stateArray}/>
  ) : (
    <div></div>
  );
}

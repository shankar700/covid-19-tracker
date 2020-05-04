import React from "react";


import DisplayTable from './DisplayTable'

export default function DisplayData({data}) {

  // console.log(data.length);
  let stateArray = data.length > 0
    ? data.map((item) => {
        return {
          name: item.state,
          active: item.active,
          confirmed:item.confirmed,
          deaths:item.deaths
        };
      })
    : null;

  // console.log(stateArray);

  return data.length > 0
    ?  (
         
  <DisplayTable data={stateArray} />

  ):(<div>
    <p>Wait its loading</p>
    </div>)
}

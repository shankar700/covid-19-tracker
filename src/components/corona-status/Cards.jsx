import React from "react";

import './cards.css';
import Card from './Card'
import LastUpdated from'./LastUpdated';

export default function Cards({data, graphData , history}) {
  // console.log(props.data);
  // console.log(graphData);
  // console.log(history);
  let totalData = data.map((item) => {
    return item.state === "Total"
      ? {
          confirmed: item.confirmed,
          deaths: item.deaths,
          recovered: item.recovered,
          deltaConfirmed: item.deltaconfirmed,
          deltaRecovered: item.deltarecovered,
          deltaDeaths: item.deltadeaths,
          lastUpdated: item.lastupdatedtime,
        }
      : null;
  });

  

  // if(totalData.length > 0){console.log(totalData);}

  return totalData.length > 0 && graphData.length > 0 ? (
    <div className='cards_container'>

      <Card className = 'cards_confirmed' title='Confirmed' count = {totalData[0].confirmed} deltaCount={totalData[0].deltaConfirmed } date={totalData[0].lastUpdated } dataKey="dailyconfirmed" 
      graphData={graphData} stroke='dodgerBlue' />

      <Card className = 'cards_recovered' title='Recovered' count = {totalData[0].recovered} deltaCount={totalData[0].deltaRecovered } date={totalData[0].lastUpdated } dataKey="dailyrecovered" graphData={graphData} stroke='#28a745' />

      <Card className = 'cards_deaths' title='Deaths' count = {totalData[0].deaths} deltaCount={totalData[0].deltaDeaths } date={totalData[0].lastUpdated } dataKey="dailydeceased" graphData={graphData} stroke='#dc3545'/>    

     
            
    </div>
  ) : (
    <div >
      <p>Loading...</p>
    </div>
  );
}

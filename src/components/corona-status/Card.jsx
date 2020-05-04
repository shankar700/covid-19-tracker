import React from "react";

import Countup from "react-countup";
import LineGraph from "./LineGraph";

export default function Card({
  className,
  title,
  count,
  deltaCount,
  date,
  dataKey,
  graphData,
  stroke,
}) {
  return (
    <div className={className}>
      <div className='cards_card '>
        <div className='cards_cardTitle '>{title}</div>
        <div className='cards_number'>
          <Countup
            start={0}
            end={parseInt(count)}
            duration={2.5}
            separator=','
          />
          <span className='cards_delta  '>
            <Countup
              start={0}
              end={parseInt(deltaCount)}
              duration={2.5}
              separator=','
            />
          </span>
        </div>

        <LineGraph graphData={graphData} dataKey={dataKey} stroke={stroke} />
      </div>
    </div>
  );
}

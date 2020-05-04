import React from 'react'
import Countup from "react-countup";

export default function DisplayTable({data}) {
    
    return data.length>0 ? (        
    <div className='top_five_container'>
      {data.map((data) => {
        return(
           <div className='top_five_row' key={Math.random()}>
          <h5>{data.name}</h5>
          <p>
            Active:{" "}
            <span className='top_five_text_muted'>
              {" "}
              <Countup
                start={0}
                end={parseInt(data.active)}
                duration={2.5}
                separator=','
              />
            </span>
          </p>
          <p>
            Confirmed:{" "}
            <span className='top_five_text_muted'>
              {" "}
              <Countup
                start={0}
                end={parseInt(data.confirmed)}
                duration={2.5}
                separator=','
              />
            </span>
          </p>
          <p>
            Deaths:
            <span className='top_five_text_muted'>
              {" "}
              <Countup
                start={0}
                end={parseInt(data.deaths)}
                duration={2.5}
                separator=','
              />
            </span>
          </p>
          </div>
      
    
        )
      })}
         
    </div>) : (
        <div>
            <p>
                Waiting for state query!!!!
            </p>
        </div>
    )
    

        
    
}

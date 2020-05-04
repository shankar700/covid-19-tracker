import React, {useState, useEffect} from "react";
import axios from "axios";
import DisplayData from "./DisplayDataForTopFive";
import SearchBar from "./corona-status/SearchBar";
import Cards from "./corona-status/Cards";
import StateWiseData from "./corona-status/StateWiseData";
import {BrowserRouter as Router} from "react-router-dom";

export default function App() {
  const stateWiseURL = "https://api.covid19india.org/data.json";
  const districtWiseURL =
    "https://api.covid19india.org/state_district_wise.json";
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [state, setState] = useState(" ");
  //  const [district , setDistrict] = useState("Mumbai");
  // let page_toggle = false;

  useEffect(() => {
    axios.get(stateWiseURL).then((res) => {
      setData(res.data.statewise);
      setGraphData(res.data.cases_time_series);
      // (res.data.statewise.forEach(item => {
      //   console.log(item.state==="Total"?{confirmed:item.confirmed,deaths:item.deaths,recovered:item.recovered}:null);
      // }));

      axios.get(districtWiseURL).then((res) => {
        // console.log(res.data);
        setStateData(res.data);
      });
    });
  }, [stateWiseURL, districtWiseURL]);

  const searchState = (state) => {
    console.log("Searching for =>", state);
    setState(state);

    //  setDistrict(district);
  };

  return (
    <div className='app_container'>
      <Router>
        <SearchBar searchState={searchState} />
        <Cards data={data} graphData={graphData} />
        <DisplayData data={data} />
        <br />
        <br />
        <StateWiseData stateData={stateData} state={state} />
      </Router>
    </div>
  );
}

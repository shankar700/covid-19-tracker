import React,{useState , useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line ,Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';


const Charts= () => {
    const [dailyData , setDailyData] = useState([]);

    useEffect(() => {
        const FetchApi = async () => {
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData);
        }

        console.log("daily data =>",dailyData);

        FetchApi();
    },[]);

    console.log("daily data =>",dailyData)
    
    const lineChart = (       

         (<Line 
            data={{
                labels:dailyData.map(({date})=>date),
                dataSets:[{
                    data:dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
        
        
        />)
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts;
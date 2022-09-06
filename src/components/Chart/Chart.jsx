import React,{ useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import  {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart=({data:{confirmed, recover, deaths}, country})=>{
 
   const [dailyData,setDailyData]=useState([]);
   useEffect(()=>{
       const fetchAPI=async()=>{
           setDailyData(await fetchDailyData());
       }
       fetchAPI();
   },[dailyData]);

   const lineChart=(
       dailyData.length?
       (<Line
       data={
            {
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    labels:dailyData.map(({confirmed})=>confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true,
                }, {
                    labels:dailyData.map(({recover})=>recover),
                    label:'deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true,
                },
                   { labels:dailyData.map(({deaths})=>deaths),
                    label:'deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(0,255,0,0.5)',
                    fill:true,
                }
            ],
            }
        } 
       />):null
   );
   const barChart=(
           confirmed
           ?(<Bar 
             data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[
                    {
                        label:'people',
                        backgroundColor:[
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0.5)',
                        ],
                        data:[confirmed.value, recover, deaths.value]
                    }
                ]
             }}
             options={{
                 legend:{display:false},
                 title:{display:true, text:`Current state in ${country}`},
             }}
           />):null
   );
    return(
        <div className={styles.container}>
         {country?barChart:lineChart}
        </div>
    );
}

export default Chart;
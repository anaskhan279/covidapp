import axios from "axios";
const url='https://covid19.mathdro.id/api';
export const fetchData=async(country)=>
{
   let changebleUrl=url;
   if(country)
   {
      changebleUrl=`${url}/countries/${country}`;
   }
   try {
      const {data:{confirmed, recovered, deaths, lastUpdate}}=await axios.get(changebleUrl);
      const recover = confirmed.value - deaths.value; 
      return {confirmed, recover, deaths, lastUpdate};
        

   } catch (error) {
       console.log(error);
   }
}

// export const fetchDailyData=async()=>{

//    try {
//         const {data}=await axios.get(`${url}/daily`);

//         const modifiedData=data.map((dailyData)=>({
//            confirmed:dailyData.confirmed.total,
//            deaths:dailyData.deaths.total,
//            date:dailyData.reportDate,
//         }));

//        return modifiedData; 

//    } catch (error) {
      
//    }
// }

export const fetchDailyData = async () => {
   try {
     const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
     
     return data.map(({ positive, hospitalized, death, dateChecked: date }) => ({ confirmed: positive, hospitalized, deaths: death, date }));
   } catch (error) {
     return error;
   }
 };

export const fetchCountries=async()=>{
    try {
         const {data:{countries}}=await axios.get(`${url}/countries`);
         
         return countries.map((country)=>country.name);

    } catch (error) {
       
    }
}
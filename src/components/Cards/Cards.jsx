import React from 'react';
import  {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
const Cards=({data: {confirmed, recover,deaths,lastUpdate}})=>{
    console.log(recover)

    if(!confirmed)
    {
        return 'loading...';
    }
    return(
        <div className={styles.container}>
             <Grid container spacing={3} justify="center">
                 <Grid item component={Card} x5={12} md={3} className={cx(styles.card,styles.infected)} > 
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>Infected</Typography>
                         <Typography variant="h5">
                             <CountUp 
                              start={0}
                              end={confirmed.value}
                              duration={2.5}
                              separator=","
                             />
                         </Typography>
                         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                         <Typography variant="body2">No Of Active Test Cases Of COVID-19</Typography>
                     </CardContent>
                 </Grid>
                 <Grid item component={Card} x5={12} md={3} className={cx(styles.card,styles.recovered)}> 
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                         <Typography variant="h5">
                             <CountUp 
                              start={0}
                              end={recover}
                              duration={2.5}
                              separator=","
                             />
                         </Typography>
                         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                         <Typography variant="body2">No Of Recoveries From COVID-19</Typography>
                     </CardContent>
                 </Grid>
                 <Grid item component={Card} x5={12} md={3} className={cx(styles.card,styles.deaths)}> 
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>Death</Typography>
                         <Typography variant="h5">
                             <CountUp 
                              start={0}
                              end={deaths.value}
                              duration={2.5}
                              separator=","
                             />
                         </Typography>
                         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                         <Typography variant="body2">No Of Deaths Caused By COVID-19</Typography>
                     </CardContent>
                 </Grid>
             </Grid>
        </div>
    );
}

export default Cards;
import React from "react";
import Indicator from "../../component/indicator/indicator";
import {USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from "../../data";
import Barweight from "../../component/graph/histogram/histogram";
import Timeline from "../../component/graph/curve/curve";
import RadarProfile from "../../component/graph/radar/radar";


const id=12;

const main_data=USER_MAIN_DATA.find(function (data) {
  if(data.id===id){
    return data;
  }
});  

const data_act=USER_ACTIVITY.find(function (data_act) {
  if(data_act.userId===id){
    return data_act;
  }
});
const data_time=USER_AVERAGE_SESSIONS.find(function (data_time) {
  if(data_time.userId===id){
    return data_time;
  }
});    
const data_perf=USER_PERFORMANCE.find(function (data_perf) {
  if(data_perf.userId===id){
    return data_perf;
  }
});    



function My_home() {


  const calories=main_data.keyData.calorieCount+"kcal";
  const proteines=main_data.keyData.proteinCount+"gr";
  const glucides=main_data.keyData.carbohydrateCount+"gr";
  const lipides=main_data.keyData.lipidCount+"gr";

    return (
    <section className="My_home">    
      <div className="wrapper_nav-v">
        <nav className="nav-v">
          <img src="/meditation.png" alt="KASA"></img>
          <img src="/muscu.png" alt="KASA"></img>
          <img src="/natation.png" alt="KASA"></img>
          <img src="/velo.png" alt="KASA"></img>
        </nav>  
        <p className="copright">Copiryght, SportSee 2020</p>
      </div>  
      <header className="header_profile"><div className="wrapper_welcome"><h1>Bonjour</h1><h1 className="firstname"> {main_data.userInfos.firstName}</h1></div><p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p></header>
      <section className="wrapper_chart">
      <Barweight databar={data_act.sessions}></Barweight>
      <Timeline dataline={data_time.sessions}></Timeline>
      <RadarProfile dataradar={data_perf.data}></RadarProfile>
      </section>
      <aside className="wrapper_indi">
      <Indicator img="/calories-icon.png" name="calories" value={calories}></Indicator>
      <Indicator img="/protein-icon.png" name="Proteines" value={proteines}></Indicator>
      <Indicator img="/carbs-icon.png" name="Glucides" value={glucides}></Indicator>
      <Indicator img="/fat-icon.png" name="Lipides" value={lipides}></Indicator>
      </aside>
      
    </section>
    );
    }
    export default My_home;


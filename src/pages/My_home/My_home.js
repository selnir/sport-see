import React from "react";
import Indicator from "../../component/indicator/indicator";
import {USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from "../../data";
import Barweight from "../../component/graph/histogram/histogram";
import Timeline from "../../component/graph/curve/curve";
import RadarProfile from "../../component/graph/radar/radar";
import Circle from "../../component/graph/circle_dia/circle";
import useFetch from "../../tools/useFetch";


const id=12;


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

  const main_data =useFetch("http://localhost:3000/user/12");

  const calories=main_data.data.keyData.calorieCount+"kcal";
  const proteines=main_data.data.keyData.proteinCount+"gr";
  const glucides=main_data.data.keyData.carbohydrateCount+"gr";
  const lipides=main_data.data.keyData.lipidCount+"gr";

return (
    <section className="My_home">    
      <div className="wrapper_nav-v">
        <nav className="nav-v">
          <img src="/meditation.png" alt="meditation"></img>
          <img src="/muscu.png" alt="muscu"></img>
          <img src="/natation.png" alt="natation"></img>
          <img src="/velo.png" alt="velo"></img>
        </nav>  
        <p className="copright">Copiryght, SportSee 2020</p>
      </div>  
      <header className="header_profile"><div className="wrapper_welcome"><h1>Bonjour </h1><h1 className="firstname"> {main_data.data.userInfos.firstName}</h1></div><p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p></header>
      <Barweight databar={data_act.sessions}></Barweight>
      <Timeline dataline={data_time.sessions}></Timeline>
      <RadarProfile dataradar={data_perf.data}></RadarProfile>
      <Circle datacircle={main_data.data}></Circle>
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


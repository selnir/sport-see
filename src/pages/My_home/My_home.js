import React from "react";
import Indicator from "../../component/indicator/indicator";
import Barweight from "../../component/graph/histogram/histogram";
import Timeline from "../../component/graph/curve/curve";
import RadarProfile from "../../component/graph/radar/radar";
import Circle from "../../component/graph/circle_dia/circle";
import useFetch from "../../tools/useFetch";
import GetData from "../../tools/Data_services";


const id=12;

function My_home() {

  const main_data =useFetch("http://localhost:3000/user/12");
  const data_act =useFetch("http://localhost:3000/user/12/activity");
  const data_time =useFetch("http://localhost:3000/user/12/average-sessions");
  const data_perf =useFetch("http://localhost:3000/user/12/performance");


if(main_data && data_act && data_perf && data_time){
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
      <Barweight databar={data_act.data.sessions}></Barweight>
      <Timeline dataline={data_time.data.sessions}></Timeline>
      <RadarProfile dataradar={data_perf.data.data}></RadarProfile>
      <Circle datacircle={main_data.data}></Circle>
      <aside className="wrapper_indi">
      <Indicator img="/calories-icon.png" name="calories" value={calories}></Indicator>
      <Indicator img="/protein-icon.png" name="Proteines" value={proteines}></Indicator>
      <Indicator img="/carbs-icon.png" name="Glucides" value={glucides}></Indicator>
      <Indicator img="/fat-icon.png" name="Lipides" value={lipides}></Indicator>
      </aside>
      
    </section>
    );}
    }
    export default My_home;


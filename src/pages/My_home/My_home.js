import React from "react";
import Indicator from "../../component/indicator/indicator";
import Barweight from "../../component/graph/histogram/histogram";
import Timeline from "../../component/graph/curve/curve";
import RadarProfile from "../../component/graph/radar/radar";
import Circle from "../../component/graph/circle_dia/circle";
import useFetch from "../../tools/useFetch";
import GetData from "../../tools/Data_services";


const id=18;

function My_home() {

  const dataconv=GetData(id);


if(dataconv){
  const main_data =dataconv[0];
  const data_act =dataconv[1];
  const data_time =dataconv[2];
  const data_perf =dataconv[3];
  const calories=main_data.keyData.calorieCount+"kcal";
  const proteines=main_data.keyData.proteinCount+"gr";
  const glucides=main_data.keyData.carbohydrateCount+"gr";
  const lipides=main_data.keyData.lipidCount+"gr";

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
      <header className="header_profile"><div className="wrapper_welcome"><h1>Bonjour </h1><h1 className="firstname"> {main_data.userInfos.firstName}</h1></div><p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p></header>
      <Barweight databar={data_act.sessions}></Barweight>
      <Timeline dataline={data_time.sessions}></Timeline>
      <RadarProfile dataradar={data_perf.data}></RadarProfile>
      <Circle datacircle={main_data}></Circle>
      <aside className="wrapper_indi">
      <Indicator img="/calories-icon.png" name="calories" value={calories}></Indicator>
      <Indicator img="/protein-icon.png" name="Proteines" value={proteines}></Indicator>
      <Indicator img="/carbs-icon.png" name="Glucides" value={glucides}></Indicator>
      <Indicator img="/fat-icon.png" name="Lipides" value={lipides}></Indicator>
      </aside>
      
    </section>
    );
    }}
    export default My_home;


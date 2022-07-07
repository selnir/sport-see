import React from "react";
import Indicator from "../../component/indicator/indicator";
import {USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from "../../data";
import Barweight from "../../component/graph/histogram/histogram";


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


function My_home() {


  const calories=main_data.keyData.calorieCount+"kcal";
  const proteines=main_data.keyData.proteinCount+"gr";
  const glucides=main_data.keyData.carbohydrateCount+"gr";
  const lipides=main_data.keyData.lipidCount+"gr";

    return (<section className="My_home"><header className="header_profile"><h1>Bonjour</h1><h1> {main_data.userInfos.firstName}</h1><p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p></header>
    <section className="wrapper_chart">
    <Barweight databar={data_act.sessions}></Barweight>
    </section>
    <aside className="wrapper_indi">
    <Indicator img="/calories-icon.png" name="calories" value={calories}></Indicator>
    <Indicator img="/protein-icon.png" name="Proteines" value={proteines}></Indicator>
    <Indicator img="/carbs-icon.png" name="Glucides" value={glucides}></Indicator>
    <Indicator img="/fat-icon.png" name="Lipides" value={lipides}></Indicator></aside>
      
      </section>
    );
    }
    export default My_home;


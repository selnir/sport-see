import React,{PureComponent}from 'react';

import { BarChart, Bar, CartesianGrid, XAxis, YAxis,Legend,ResponsiveContainer, Tooltip } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

const renderLegend = (props) => {
  const { payload } = props;
  return (

    <div className='wrapper_legend'>
    <ul className='legend_bar'>
      <li key={`item-${payload[0].id}`}><div class="cercle-black"></div>{payload[0].value}</li>
      <li key={`item-${payload[1].id}`}><div class="cercle-red"></div>{payload[1].value}</li>
    </ul></div>
  );}


  
const Barweight = (props) => {
  const datamod=props.databar.map((data,index)=>{
  
    data.day=index+1;
  
 return data });

return (
  <div className='wrapper_bar'>
    <ResponsiveContainer >
          <BarChart data={datamod} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} >
    <CartesianGrid vertical={false} stroke="#ccc " strokeWidth={1} />
    <YAxis yAxisId="right" hide="false" orientation="left"  />
    <YAxis yAxisId="left" orientation="right" />
    <XAxis dataKey="day"  >  </XAxis>
    <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: '#E60000' }}></Tooltip>

    <Legend payload={[
      { id: 'kilogram', value: 'Poids (kg)'},
      { id: 'calories', value: 'Calories brûlées (kCal)'},]}
       height="50px" verticalAlign="top"  align="right"
       content={renderLegend}>
       </Legend>
          <Bar yAxisId="left" dataKey="kilogram" barSize={10} fill="#282D30" radius={[5, 5, 0, 0]}  ></Bar>
          <Bar yAxisId="right"  dataKey="calories" barSize={10} fill='#E60000'radius={[5, 5, 0, 0]} ></Bar>
  </BarChart></ResponsiveContainer></div>
);
}
  
export default Barweight;
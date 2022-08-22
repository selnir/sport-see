import React,{PureComponent}from 'react';

import { BarChart, Bar, CartesianGrid, XAxis, YAxis,Legend,ResponsiveContainer, Tooltip,Label } from 'recharts';

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
      <h1>Activité quotidienne</h1>
    <ul className='legend_bar'>
      <li key={`item-${payload[0].id}`}><div class="cercle-black"></div>{payload[0].value}</li>
      <li key={`item-${payload[1].id}`}><div class="cercle-red"></div>{payload[1].value}</li>
    </ul></div>
  );}

/**
 * Barweight
 * @param {number} data.day day
 * @param {number} data.kilogram weight of the user
 * @param {number} data.calories user calories 
 */


const Barweight = (props) => {
  const datamod=props.databar.map((data,index)=>{
  
    data.day=index+1;
  
 return data });

return (
  <div className='wrapper_bar'>
    <ResponsiveContainer>
          <BarChart data={datamod} margin={{ top:0, right: 10, left: 10, bottom: 10 }} >
    <CartesianGrid vertical={false} stroke="#ccc " strokeWidth={1} strokeDasharray={3} />
    <YAxis yAxisId="left" hide="false" orientation="left" />
    <YAxis yAxisId="right" tickLine={false} orientation="right" tickMargin={10} stroke={false} tick={{ fill: '#9B9EAC' }} domain={['dataMin-3', 'dataMax+1']}></YAxis>
    <XAxis dataKey="day"  tickLine={false} tickMargin={10} stroke='#9B9EAC' tick={{ fill: '#9B9EAC' }} >  </XAxis>
    <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: '#E60000' }}></Tooltip>

    <Legend payload={[
      { id: 'kilogram', value: 'Poids (kg)'},
      { id: 'calories', value: 'Calories brûlées (kCal)'},]}
       height="100px" verticalAlign="top"  align="right"
       content={renderLegend}>
       </Legend>
          <Bar yAxisId="left" dataKey="calories" barSize={10} fill="#282D30" radius={[5, 5, 0, 0]}  ></Bar>
          <Bar yAxisId="right"  dataKey="kilogram" barSize={10} fill='#E60000'radius={[5, 5, 0, 0]} ></Bar>
  </BarChart></ResponsiveContainer></div>
);
}
  
export default Barweight;
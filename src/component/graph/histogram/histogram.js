import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis,Legend,ResponsiveContainer } from 'recharts';




  
const Barweight = (props) => {
  
// Sample data
  
return (
  <div className='wrapper_bar'>
    <h2 className='title_bar'>Activité quotidienne</h2>
  <ResponsiveContainer width="100%" height="50%">
<BarChart data={props.databar} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} >
    <CartesianGrid vertical={false} stroke="#ccc " strokeWidth={1} />
    <YAxis yAxisId="right" hide="false" orientation="left"  />
    <YAxis yAxisId="left" orientation="right" />
    <XAxis dataKey="day">  </XAxis>

    <Legend payload={[
      { id: 'kilogram', value: 'Poids (kg)', type: 'circle' ,color:"#282D30"},
      { id: 'calories', value: 'Calories brûlées (kCal)', type: 'circle',color:'#E60000'},]}
       height="50px" verticalAlign="top"  align="right"
       >
       </Legend>
          <Bar yAxisId="left" dataKey="kilogram" barSize={10} fill="#282D30" radius={[5, 5, 0, 0]}  ></Bar>
          <Bar yAxisId="right"  dataKey="calories" barSize={10} fill='#E60000'radius={[5, 5, 0, 0]} ></Bar>
  </BarChart></ResponsiveContainer></div>
);
}
  
export default Barweight;
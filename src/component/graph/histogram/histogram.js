import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis,Offset } from 'recharts';
  
  
const Barweight = (props) => {
  
// Sample data
  
return (
<BarChart width={1000} height={300} data={props.databar}>
    <Bar dataKey="kilogram" fill="green" />
    <Bar dataKey="calories" fill='red'/>
    <CartesianGrid stroke="#ccc" />
    <YAxis domain={['dataMin', 'dataMax']} />
    <XAxis dataKey="day" />
    <YAxis />
  </BarChart>
);
}
  
export default Barweight;
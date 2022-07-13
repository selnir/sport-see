import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-line">
          <p className="label">{`${payload[0].value}min`}</p>
        </div>
      );
    }
  
    return null;
  };
const Timeline = (props) => {
    const datamod=props.dataline.map((data,index)=>{
  
        data.day=index+1;
        switch (data.day) {
            case 1:
                data.day="L"              
            break;
            case 2:
                data.day="M"              
                break;
            case 3:
                data.day="M"              
                break;
            case 4:
                data.day="J"              
                break;
            case 5:
                data.day="V"              
            break;
            case 6:
                data.day="S"              
            break;
            case 7:
                data.day="D"              
            break;

            default:
          }

      
     return data });
  
  return (
    <div className='wrapper_graph'>

    <ResponsiveContainer>
    <LineChart data={datamod} >
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
      <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.4}/>
      <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1}/>
      </linearGradient>
    </defs>
      
      
      <CartesianGrid vertical={false} horizontal={false}    />
      <XAxis dataKey="day" tick={{ fill: '#FFFFFF' }} interval={"preserveStartEnd"}  stroke={false} style={{ textAnchor: 'end' }}/>
      <YAxis hide="true"/>
      <Tooltip content={<CustomTooltip />} cursor={false} />
      <Line type="monotone" dataKey="sessionLength" dot={false} tick={{ fill: '#FFFFFF' }} strokeLinecap="round" stroke="url(#gradient)"/>
    </LineChart>
  </ResponsiveContainer></div>
  );
  }
    
  export default Timeline;
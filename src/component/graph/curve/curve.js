import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={0} textAnchor="end" fill="#FFFFFF" opacity={0.50} padding={{ left: 20, right: 20 }}>
          {payload.value}
        </text>
      </g>
    );
  }
}



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

    <ResponsiveContainer aspect={1}>
    <LineChart data={datamod} >
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
      <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.4}/>
      <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1}/>
      </linearGradient>
    </defs>
      
      
      <CartesianGrid vertical={false} horizontal={false}    />
    <XAxis dataKey="day" minTickGap={1} stroke={false} interval={`preserveStartEnd`} tick={<CustomizedAxisTick/>} tickMargin={10}    domain={['dataMin', 'dataMax']}/>
      <YAxis hide="true"/>
      <Tooltip content={<CustomTooltip />} cursor={false} />
      <Line type="monotone" dataKey="sessionLength" dot={false} tick={{ fill: '#FFFFFF' }} strokeWidth={2} strokeLinecap="round" stroke="url(#gradient)" padding={{ left: 0, right: 0 }}/>
    </LineChart>
  </ResponsiveContainer></div>
  );
  }
    
  export default Timeline;
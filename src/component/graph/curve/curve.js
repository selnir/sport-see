import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;
    let coordx=0;

    switch (payload.value) {
      case 1:
        coordx=0;
      break;
      case 2:
        coordx=0;
        break;

      case 3 :
        coordx=0
        break;
      case 4 :
        coordx=-0;
      break;
      case 5:
        coordx=0;
      break;
      case 6:
        coordx=0;
        break;
        case 7:
          coordx=0;
          break;

      default:
    }

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={coordx} y={0} dy={50} textAnchor="middle" fill="#FFFFFF" opacity={0.50} >
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

  
  return (
    <div className='wrapper_graph'>

    <ResponsiveContainer>
    <LineChart data={props.dataline}>
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
      <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.4}/>
      <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1}/>
      </linearGradient>
    </defs>
      
      
      <CartesianGrid vertical={false} horizontal={false}    />
    <XAxis dataKey="day" stroke={false} tick={<CustomizedAxisTick/>} height={100}  interval={`preserveStartEnd`}/>
      <YAxis hide="true"/>
      <Tooltip content={<CustomTooltip />} cursor={false} />
      <Line type="monotone" dataKey="sessionLength" dot={false}  strokeWidth={2} strokeLinecap="round" stroke="url(#gradient)" />
    </LineChart>
  </ResponsiveContainer></div>
  );
  }
    
  export default Timeline;
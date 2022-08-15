import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Label,Rectangle } from 'recharts';



class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload,width } = this.props;
    let coordx=0;

    switch (payload.value) {
      case 1:
        coordx=x+15;
        payload.value="L";
      break;
      case 2:
        coordx=x;
        payload.value="M";

        break;

      case 3 :
        coordx=x;
        payload.value="M";

        break;
      case 4 :
        coordx=x;
        payload.value="J";

      break;
      case 5:
        coordx=x;
        payload.value="V";

      break;
      case 6:
        coordx=x;
        payload.value="S";

        break;
        case 7:
        coordx=x-10;
        payload.value="D";

        break;

      default:
    }

    return (
      <g transform={`translate(${coordx},${y})`}>
        <text x={0} y={0} dy={50} textAnchor="end" fill="#FFFFFF" opacity={0.50} >
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

  class CustomLabel extends PureComponent{ 
    render() {  
          return (
            <g>
              <foreignObject x={50} y={50} width={200} height={100}>
                <div className='title'>Durée moyenne des sessions</div>
              </foreignObject>
            </g>
          );
    }
  }
  const CustomizedDot = (props) => {
    const { cx, cy } = props;

    return (
      <svg x={cx - 10} y={cy - 10} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z" fill="white"/>
      <path d="M9 16.3607C12.5752 16.3607 15.5 13.4762 15.5 9.88545C15.5 6.29466 12.5752 3.41022 9 3.41022C5.42481 3.41022 2.5 6.29466 2.5 9.88545C2.5 13.4762 5.42481 16.3607 9 16.3607Z" stroke="white" stroke-opacity="0.198345" stroke-width="5"/>
      </svg>
    );
  };
  const CustomCursor = props => {
    const { points, width, height, stroke } = props;
    const { x, y } = points[0];
    const { x1, y1 } = points[1];
    return <Rectangle  x={x} y={y} width={width} height={height+150} fill="#000000" stroke="#000000" opacity={0.19}/>;
};

const Timeline = (props) => {

  
  return (
    <div className='wrapper_graph'>
 
    <ResponsiveContainer aspect={1}>
    <LineChart data={props.dataline} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
      <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.4}/>
      <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1}/>
      </linearGradient>
    </defs>
      
      
      <CartesianGrid vertical={false} horizontal={false}    />
    <XAxis dataKey="day" stroke={false} interval={0} height={100} label={<CustomLabel/>} tick={<CustomizedAxisTick/>}  />
      <YAxis hide="true"/>
      <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
      <Line connectNulls type="monotone" dataKey="sessionLength" dot={false} activeDot={<CustomizedDot />}   strokeWidth={2} strokeLinecap="round" stroke="url(#gradient)" />
    </LineChart>
  </ResponsiveContainer></div>
  );
  }
  
  

  export default Timeline;

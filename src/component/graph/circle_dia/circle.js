import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer, Label } from 'recharts';

class CustomLabel extends PureComponent{ 


  render() { 
    
    const {cx,cy,value } = this.props;
        return (
          <g>
            <foreignObject x={0} y={0} width="100%" height="100%">
              <div className='score'>Score</div>
              <div className='objectif'><div className='value'>{value}%</div> de votre<br></br> objectif</div>
            </foreignObject>
          </g>
        );
  }
}

const Circle = (props) => {

 


 const data = [
  {
    uv: props.datacircle.todayScore*100,
    fill: '#ff0000',
  },
];
    
  return (
    <div className='wrapper_circle'>

        <ResponsiveContainer >
        <RadialBarChart 

          innerRadius="80%"
          outerRadius="90%"
          data={data} 
          startAngle={180} 
          endAngle={-360}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar   clockWise={true} label={<CustomLabel/>} cornerRadius={30 / 2} dataKey='uv'/>
          </RadialBarChart>
        </ResponsiveContainer></div>  );

  }
    
  export default Circle;


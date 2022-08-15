import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,Label } from 'recharts';

class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, payload } = this.props;
      let coordy=0;
      let coordx=0;
      let anchor="";

      switch (payload.value) {
        case "Cardio":
          coordy=5;
          coordx=0;
          anchor="end" 
                        
        break;
        case "Energie" :
          coordy=5;
          coordx=0;
          anchor="end"               
            break;
        case "Endurance":
          coordy=10;
            coordx=0;
            anchor="middle"
                      
            break;
        case "Force":
          coordy=5;
          coordx=0;
          anchor="start"              
            break;
        case "Vitesse":
          coordy=5;
            coordx=0;
            anchor="start" 
                        
        break;
        case "Intensité" :
          coordy=-5;
            coordx=0;
            anchor="middle"  
                     
        break;

        default:
      }
  
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={coordx} y={0} dy={coordy} fontSize={14} fontWeight={500} textAnchor={anchor} fill="#FFFFFF">
            {payload.value}
          </text>
        </g>
      );
    }
  }



const RadarProfile = (props) => {
    const datamod=props.dataradar.map((data,index)=>{
  
        data.kind=index+1;
        switch (data.kind) {
            case 1:
                data.kind="Cardio"              
            break;
            case 2:
                data.kind="Energie"              
                break;
            case 3:
                data.kind="Endurance"              
                break;
            case 4:
                data.kind="Force"              
                break;
            case 5:
                data.kind="Vitesse"              
            break;
            case 6:
                data.kind="Intensité"              
            break;

            default:
          }

      
     return data });
  
  return (
    <div className='wrapper_radar'>

        <ResponsiveContainer aspect={1}>
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={props.dataradar} paddingAngle={1000} startAngle="-150" endAngle="210">          
        <PolarGrid radialLines={false} strokeWidth={2} />
          <PolarAngleAxis dataKey="kind" tick={<CustomizedAxisTick/>} />
          <Label alue="Pages of my website" offset={0} position="insideBottom"></Label>
          <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.99} />
        </RadarChart>
      </ResponsiveContainer></div>  );

  }
    
  export default RadarProfile;
  
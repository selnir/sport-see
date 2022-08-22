import useFetch from "./useFetch";
import PropTypes from 'prop-types';


/**
 * GetData
 * @param {number} id User Identification
 */

function GetData(id) {

    let data=null;
    
    const main_data = useFetch(`http://localhost:3000/user/${id}`);;
    const data_act = useFetch(`http://localhost:3000/user/${id}/activity`);
    const data_time = useFetch(`http://localhost:3000/user/${id}/average-sessions`);
    const data_perf = useFetch(`http://localhost:3000/user/${id}/performance`);
    
        if (main_data && data_act && data_perf && data_time) 
        {
                        return data=[main_data.data,
                            data_act.data,
                            data_time.data,
                            data_perf.data] 
                    
                }
    }
    GetData.PropTypes={
        id: PropTypes.string
    }
 
 export default GetData;



import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function GetData(id) {

    let data_conv=null;
    
    this.main_data = useFetch(`http://localhost:3000/user/${id}`);;
    this.data_act = useFetch(`http://localhost:3000/user/${id}/activity`);
    this.data_time = useFetch(`http://localhost:3000/user/${id}/average-sessions`);
    this.data_perf = useFetch(`http://localhost:3000/user/${id}/performance`);
    this.checkdata = function() {
        if (this.main_data && this.data_act && this.data_perf && this.data_time) 
        {
                        return data_conv=[
                        this.main_data.data,
                        this.data_act.data,
                        this.data_time.data,
                        this.data_perf.data
                    ] 
                }
    }
}   
 export default GetData;



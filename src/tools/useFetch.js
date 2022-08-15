import { useEffect, useState } from "react";
import PropTypes from 'prop-types';



const useFetch = url => {
    const [data, setData] = useState(null);
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);  }
  
    useEffect(() => {fetchData()},[url]);  
    return data;
  };
  useFetch.propTypes={

    url:PropTypes.string

  }
export default useFetch;
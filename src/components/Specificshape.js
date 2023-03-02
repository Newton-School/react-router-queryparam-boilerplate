import React from 'react'
import { useLocation } from 'react-router-dom'
import Home from './Home';
import Shapes from './Shapes';

const Specificshape = () => {
    // const {state} = useLocation();
    const {search} = useLocation();
    const query = React.useMemo(()=> new URLSearchParams(search), [search]);
    console.log(state);
    if (query.get("shape") === "circle"){
        return (
          <div id ="circle"class = "divcircle" style={{backgroundColor: query.get("color")}}>
            <h2>{shape}</h2>
          </div>
    
        );
      }
      if (query.get("shape") === "square"){
        return (
          <div id ="square"class = "divsquare" style={{backgroundColor: query.get("color")}}>
            <h2>{shape}</h2>
          </div>
    
        );
      } 
}

export default Specificshape
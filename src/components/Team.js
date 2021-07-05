import React, {useState}from 'react'
import { Slidebar } from './Slidebar'
import { Button } from '@material-ui/core';
import './Team.css';
const Team = () => {
 
    const [visible,setVisible]=useState(3);
    const showMOreItems=()=>{
        setVisible((preValue)=>preValue+3);
    }
    return (
        <div>
          <div className="container"
         
          >
              {Slidebar.slice(0,visible).map(item=>(
                  <>
                  <div className="block"
                  
                  >
                      <div className="id" style={{ width:"40px",height:"40px",display:"flex"}}>
                          <span
                           
                          ><h4>{item.title}</h4></span>
                          </div>
                          <p>{item.body}</p>
                      </div> 
                     </>
              ))}
               </div>
              <Button 
               onClick={showMOreItems}
              variant="contained">Add more</Button>
               
        </div>
    );
};

export default Team

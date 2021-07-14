import React ,{useState}from 'react'
import Cardss from './Cardss'
import "./Web.css"
import Webteam from './our/Webteam';
import { AppBar,Toolbar ,Button} from '@material-ui/core';
const Web = () => {
    const[active,setactive]=useState("Firstcard");
    return (
        <div >
            <h1 style={{textAlign:"center",fontFamily:"fantasy"}}>OUR TEAM</h1>
            <div className="btn">
            <AppBar position="static "style={{background:"lightgray",}}>
                <Toolbar style={{ display:"flex",justifyContent:"space-between"}} >
                    <Button onClick={()=>setactive("Firstcard")} style={{color:"red" ,font:"21em"}}>web</Button >
                    <Button onClick={()=>setactive("Secondcard")} style={{color:"red"}}>back</Button>
                    <Button onClick={()=>setactive("Thirdcard")} style={{color:"red"}}>content</Button>
                    <Button onClick={()=>setactive("fourthcard")} style={{color:"red"}}>Others</Button>
                </Toolbar>
            </AppBar>
            </div>
            <div className="n">
                {active==="Firstcard"&&<Cardss title={<Webteam/>}/>}
                {active==="Secondcard"&&<Cardss title={<h1 style={{background:"lightblue",height:"400px",textAlign:"center"}}>back-team </h1>}/>}
                {active==="Thirdcard"&&<Cardss title={<h1 style={{background:"lightblue",height:"400px",textAlign:"center"}}>Contentteam </h1>}/>}
                {active==="fourthcard"&&<Cardss title={<h1 style={{background:"lightblue",height:"400px",textAlign:"center"}}>others </h1>}/>}
            </div>
        </div>
    )
}

export default Web

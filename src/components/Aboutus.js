import React, { useState } from "react";
import { Slidebar } from "./Slidebar";
import Full from "./Full";
import AboutCarousel from "./AboutCarousel";
import { AppBar, Toolbar, Box, Button, Slide } from "@material-ui/core";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "../App.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

const Aboutus = () => {
    const classes = useStyles();
    return (
        <div className="main container">
            {/* <AppBar position="static" style={{backgroundColor:"black" }}>
        <Toolbar>
           <Button style={{backgroundColor:"white",height:"50px"}}>
             <span><h3 style={{color:"black"}}>Learn</h3></span>
             <span><h3 style={{color:"red"}}>ED</h3></span>
             </Button>
             <Box  style={{width :"600px",marginLeft:"auto"}}>
                <Button  style={{backgroundColor:"white",height:"50px",width:"100px",marginRight:"20px"}}>
                Home
                </Button>
                <Button style={{backgroundColor:"white",height:"50px",width:"100px",marginLeft:"110px"}}>About us</Button>
                <Button style={{backgroundColor:"white",height:"50px",width:"100px",marginLeft:"150px"}}> contact us</Button>
             </Box>
        </Toolbar>
      </AppBar> */}
            <div className={classes.root}>
                <div style={{ flexWrap: "warp" }} className="pt-4 about row">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <img
                                className="p-0"
                                style={{ objectFit: "cover" ,flexWrap: "wrap" ,height:"220px"}}
                                src="https://tse1.mm.bing.net/th?id=OIP.WfpaaOMaYL3PkR9iggiEqgHaDf&pid=Api&P=0&w=334&h=158"
                                alt="pic"
                            />
                            {/* <AboutCarousel /> */}
                        </Grid>

                        <Grid item xs={12} sm={6} className="p-2">
                            {/* <h2 className="text-center "style={{fontFamily:"fantasy"}}>ABOUT US</h2> */}
                            <h2 className="text-center">ABOUT US</h2>
                            <Full />
                        </Grid>
                    </Grid>
                </div>

                <div className="our_story p-4">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            {/* <h1 style={{ textAlign: "center" ,fontFamily:"fantasy"}}> OUR STORY</h1> */}
                            <h1 style={{ textAlign: "center" }}>OUR STORY</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisci
                                elit, About Us Lorem ipsum dolor sit amet,
                                consectetur adipisci elit, sed eiusmod tempor
                                incidunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi
                                consequatur. Quis aute iure reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint obcaecat
                                cupiditat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum. »
                                Lorem ipsum dolor sit amet, consectetur adipisci
                                elit, sed eiusmod tempor incidunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrum exercitationem ullam corporis 
                                quis nostrum exercitationem ullam corporis
                                suscipit laboriosam, nisi ut aliquid ex ea
                                commodi consequatur. Quis aute iure
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                obcaecat cu sed eiusmod tempor incidunt ut
                                labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrum exercitationem ullam
                                corporis suscipit laboriosam, nisi ut aliquid ex
                                ea commodi consequatur. Quis aute iure
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                obcaecat cupiditat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                »
                            </p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;

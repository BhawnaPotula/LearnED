import React, { useState } from "react";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import { AppBar, Toolbar, Box, Button, Slide } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Carousel from 'react-material-ui-carousel';
const AboutCarousel = () =>{ return(
    function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                // items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
},
function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
);};

export default AboutCarousel;
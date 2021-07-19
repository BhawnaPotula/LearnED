import React, { useState } from "react";
import { Button } from "@material-ui/core";
import {
    createTheme,
    withStyles,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core/styles";

import { purple } from "@material-ui/core/colors";
const Full = () => {
    const data =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const [showdata, setshowData] = useState(true);
    const showDataMore = () => {
        return setshowData(!showdata);
    };
    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(purple[500]),
            backgroundColor: purple[500],
            justifyContent: "center",

            "&:hover": {
                backgroundColor: purple[700],
            },
        },
    }))(Button);
    const useStyles = makeStyles((theme) => ({
        root: {
            justifyContent: "center",
            alignItems: "center",
        },
        margin: {
            margin: theme.spacing(3),
        },
    }));
    const classes = useStyles();
    return (
        <div className="App">
            {showdata ? data.slice(0, 400) : data}
            <br />
            <div className="justify-content-center align-items-center">
                {" "}
                <Button
                    variant={"contained"}
                    onClick={showDataMore}
                    className={classes.margin}
                >
                    {showdata ? "READMORE" : "LESS"}
                </Button>
            </div>{" "}
        </div>
    );
};
export default Full;
export default Full;

import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import VideoImg from "../../assets/mock.jpg";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0),
    },
    gridItem: {
        paddingTop: 20
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.gridItem}>
                <Card>
                    <CardHeader title='Why we need a refund'/>
                    <CardMedia style={{height: 400}} image={VideoImg}/>
                    <CardContent>
                        <p>Covid-19 situation</p>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} className={classes.gridItem} style={{textAlign: "center"}}>
                <Button variant='contained' color='secondary'>Join us</Button>
            </Grid>
        </Grid>
    )
};

export default Home;
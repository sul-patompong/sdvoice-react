import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import VideoImg from "../../assets/mock.jpg";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FacebookLogin from 'react-facebook-login';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0),
    },
    gridItem: {
        paddingTop: 20
    }
}));


const Home = () => {
    const responseFacebook = res => {
        console.log('Response from facebook:', res);
    };

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
                {/*<Button variant='contained' color='secondary' onClick={loginWithFacebook}>Join us with Facebook</Button>*/}
                <Grid container direction="column">
                    <Typography variant='p' gutterBottom>
                        ร่วมลงชื่อกับเราด้วย
                    </Typography>
                    <FacebookLogin
                        appId="2542483672657650"
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile"
                        icon="fa-facebook"
                        // onClick={componentClicked}
                        callback={responseFacebook}/>
                </Grid>

            </Grid>
        </Grid>
    )
};

export default Home;
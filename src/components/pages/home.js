import React, {useContext} from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import VideoImg from "../../assets/mock.jpg";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {Link, useHistory} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';

// Hooks
import MainContext from "../../context/mainContext";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0),
    },
    gridItem: {
        paddingTop: 20
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


const Home = () => {
    const history = useHistory();

    const mainContext = useContext(MainContext);
    const {login, isLoading, setLoading} = mainContext;

    const classes = useStyles();

    const facebookResponse = (res) => {
        setLoading(true);
        login(res);
        history.push('/campaign-register');
    };

    return (
        <Grid container className={classes.root}>
            <Backdrop className={classes.backdrop} open={isLoading}
                // onClick={handleClose}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
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
                <Grid container direction="column">
                    <FacebookLogin
                        appId="2542483672657650"
                        autoLoad={false}
                        fields="name,email,picture"
                        scope="public_profile"
                        callback={facebookResponse}
                        render={renderProps => (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={renderProps.onClick}
                                startIcon={<FacebookIcon />}
                            >
                                ร่วมลงชื่อด้วย Facebook
                            </Button>
                        )}
                    />
                    <Button>
                        <Link to="/campaign-result">ดูผลการลงชื่อ</Link>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Home;
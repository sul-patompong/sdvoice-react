import React from 'react';
import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PollIcon from '@material-ui/icons/Poll';
import {makeStyles} from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/home";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CampaignRegisterPage from "./components/pages/campaign-register";
import MainState from "./context/MainState";
import CampaignResultPage from "./components/pages/campaign-result";

const App = () => {
    const useStyles = makeStyles((theme) => ({
        palette: {
            primary: {
                light: '#757ce8',
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
        layout: {
            paddingTop: 40,
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
                width: 1200,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
            // backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
            marginTop: theme.spacing(4),
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardMedia: {
            paddingTop: '56.25%', // 16:9
        },
        cardContent: {
            flexGrow: 1,
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
        },

    }));
    const classes = useStyles();

    return (
        <MainState>
            <AppBar position="fixed">
                <Toolbar>
                    <PollIcon className={classes.icon}/>
                    <Grid container justify='space-between' alignItems='center'>
                        <Typography variant="h5" color="inherit" noWrap style={{fontFamily: 'Sriracha'}}>
                            <a href="/" style={{textDecoration: "none", color: "white"}}>voiceForChanges</a>
                        </Typography>
                        <p style={{fontSize: 12}}>
                            by SDTC's students
                        </p>
                    </Grid>
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <Container className={classes.heroContent}>
                    <Router>
                        <Switch>
                            <Route exact path='/'>
                                <Home/>
                            </Route>
                            <Route exact path='/campaign-result'>
                                <CampaignResultPage/>
                            </Route>
                            <Route exact path='/campaign-register'>
                                <CampaignRegisterPage/>
                            </Route>
                        </Switch>
                    </Router>
                </Container>
            </main>
        </MainState>
    );
};

export default App;

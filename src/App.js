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
    }
}));

function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Toolbar>
                    <PollIcon className={classes.icon}/>
                    <Grid container justify='space-between' alignItems='center'>
                        <Typography variant="h5" color="inherit" noWrap style={{fontFamily: 'Sriracha'}}>
                            sdVoice
                        </Typography>
                        <p style={{fontSize: 12}}>
                            by Computer Programmer's students
                        </p>
                    </Grid>
                </Toolbar>
            </AppBar>
            <main>
                <Container className={classes.heroContent}>
                    <Router>
                        <Switch>
                            <Route exact path='/'>
                                <Home/>
                            </Route>
                        </Switch>
                    </Router>
                </Container>
            </main>
        </React.Fragment>
    );
}

export default App;

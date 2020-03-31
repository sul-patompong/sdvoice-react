import React, {useContext} from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import MainContext from "../../context/mainContext";

import MockAvatar from "../../assets/mock-avatar.jpeg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const CampaignRegisterPage = () => {
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
            paddingBottom: 20
        },
        pos: {
            marginTop: 20,
            textAlign: 'right'
        },
    });
    const classes = useStyles();

    const mainContext = useContext(MainContext);
    const {facebookProfile, userProfile, setUserProfile, setVote, voteResult} = mainContext;

    const {name, email, picture} = facebookProfile;
    const {firstName, lastName, code, department, classPeriod} = userProfile;

    const inputChange = e => {
        setUserProfile(
            [e.target.name], e.target.value
        );
    };

    const voteChange = e => {
        setVote(e.target.value);
    };

    return (
        <Grid container direction="column">
            <Typography variant="h4">
                หน้าต่างแสดงความคิดเห็น
            </Typography>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        ข้อมูลจาก Facebook
                    </Typography>
                    <Grid container alignItems="center">
                        {/*<Avatar src={picture.data.url}/>*/}
                        <Avatar src={MockAvatar}/>
                        <Typography variant="h5" component="h2" style={{paddingLeft: 15}}>
                            {/*{name}*/}
                            Patompong Beam
                        </Typography>
                    </Grid>

                    <Typography className={classes.pos} color="textSecondary">
                        {/*{email}*/}
                        patompong.beam@gmail.com
                    </Typography>
                </CardContent>
            </Card>
            <form style={{paddingTop: 20}}>
                <Grid container={true} spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <TextField label='รหัสนักศึกษา'
                                   name='code'
                                   value={code}
                                   onChange={inputChange}
                                   required
                                   fullWidth/>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <TextField label='ชื่อ'
                                   name='firstName'
                                   value={firstName}
                                   onChange={inputChange}
                                   required
                                   fullWidth/>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <TextField label='นามสกุล'
                                   name='lastName'
                                   value={lastName}
                                   onChange={inputChange}
                                   required
                                   fullWidth/>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <TextField label='สาขา'
                                   name='department'
                                   value={department}
                                   onChange={inputChange}
                                   required
                                   fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <TextField label='แบบการเรียน'
                                   name='classPeriod'
                                   value={classPeriod}
                                   onChange={inputChange}
                                   required
                                   fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid container justify="space-around" style={{height: 75, marginTop: 30}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">คุณเห็นด้วยหรือไม่?</FormLabel>
                        <RadioGroup row aria-label="gender" name="gender1"
                                    value={voteResult}
                                    onChange={voteChange}
                        >
                            <FormControlLabel value="false" control={<Radio />} label="ไม่เห็นด้วย" />
                            <FormControlLabel value="true" control={<Radio />} label="เห็นด้วย" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Button variant="contained" color="primary" type='submit'>ลงชื่อเลย!</Button>
            </form>
        </Grid>
    )
};

export default CampaignRegisterPage;
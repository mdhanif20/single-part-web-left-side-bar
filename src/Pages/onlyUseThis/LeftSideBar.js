import { Logout, Settings} from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; 
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';



const useStyle = makeStyles({
    container:{
        padding:"40px 0px .09px 20px", 
        height:"100vh",
        position: "sticky",
        color:'#fff',
        top:0
    },
    item:{
        display:"flex",
        alignItems:"center",
        marginBottom:"25px",
        cursor:"pointer",
        '&:hover $text':{
            fontSize:"1.2rem",
            transition:".3s"
        }
        
        
    },
    icon:{
        marginRight:"6px",

    },
    text:{
        fontWeight:800,
        fontSize:"1.1rem",
    },
    linkDesign:{
        textDecoration:"none",
        color:"#fff"
    }
    ,
    containerSmall:{
        padding:"20px 5px", 
        paddingBottom:".09px",
        height:"98vh", 
        position: "sticky",
        color:'#fff',
        top:0
    },
    textSmall:{
        fontWeight:800,
        border:"2px solid #2D2422",
        padding:"2px 16px",
        borderRadius:"30px",
        backgroundColor:"#2D2422",
        marginLeft:"-100%",
        opacity:0
    },
    itemSmall:{
        display:"flex",
        alignItems:"center",
        marginBottom:"25px",
        cursor:"pointer",
        '&:hover $textSmall':{
            marginLeft:"0",
            opacity:1,
            transition:".6s"
        }
    },
    
    iconSmall:{
        marginRight:"6px",
    }
   
})
 


const LeftSideBar = () => {
    const classes = useStyle();

    return (
        <Box sx={{display:"flex"}}>
            <Box sx={{display:{xs:"none",sm:"block"}}}>
                    <Container sx={{  bgcolor:"#0f0c0b",width:"200px"}} className={classes.container}>

                    
                    <div className={classes.item}>
                        <AppsIcon style={{fontSize:"30px"}} className={classes.icon}/>
                            <Typography style={{fontWeight:400}} className={classes.text}>Deshboard</Typography>
                    </div>   
                        <div className={classes.item}>
                            <CalendarTodayIcon style={{fontSize:"30px"}} className={classes.icon}/>
                            <Typography style={{fontWeight:400}} className={classes.text}>Appointment</Typography>   
                        </div>         
                    <Box>
                    
                        <div className={classes.item}>
                            <PeopleIcon style={{fontSize:"30px"}}  className={classes.icon}/>
                            <Typography style={{fontWeight:400}} className={classes.text}>Patients</Typography>
                        </div>
                   
                   
                            <div className={classes.item}>
                                <ManageAccountsIcon style={{fontSize:"30px"}}  className={classes.icon}/>
                                <Typography style={{fontWeight:400}} className={classes.text}>Make Admin</Typography>
                            </div>
                       
                        </Box>
                    <div className={classes.item}>
                        <AssignmentIcon style={{fontSize:"30px"}}  className={classes.icon}/>
                        <Typography style={{fontWeight:400}} className={classes.text}>Prescription</Typography>
                    </div>
                   
                    <div className={classes.item}>
                        <Settings style={{fontSize:"30px"}}  className={classes.icon}/>
                        <Typography style={{fontWeight:400}} className={classes.text}>Settings</Typography>
                    </div>
                   
                    
                </Container>
            </Box>

            <Box sx={{display:{xs:"block",sm:"none"},zIndex:1}}>
                    <Container sx={{ bgcolor:"#0f0c0b",width:"34px"}} className={classes.containerSmall}>
                    
                        <div className={classes.itemSmall}>
                            <AppsIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Deshboard</Typography>
                        </div>
                    
                    
                        <div className={classes.itemSmall}>
                            <CalendarTodayIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Appointment</Typography>
                        </div>
                  
                    

                  
                        
                         <Box>
                       
                        <div className={classes.itemSmall}>
                            <PeopleIcon style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Patients</Typography>
                        </div>
                       
                      
                            <div className={classes.itemSmall}>
                                <ManageAccountsIcon style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                                <Typography style={{fontWeight:400}} className={classes.textSmall}>MakeAdmin</Typography>
                            </div>
                        
                        </Box>
                   
                          
                    
                    <div className={classes.itemSmall}>
                        <AssignmentIcon style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}} className={classes.textSmall}>Prescription</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                        <Settings style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}}  className={classes.textSmall}>Settings</Typography>
                    </div>
                    
                    
                </Container>
            </Box>
            <Outlet/>
        </Box>
       
        
    );
};

export default LeftSideBar;
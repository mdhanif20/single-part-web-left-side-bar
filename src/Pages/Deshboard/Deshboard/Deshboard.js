import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../../Sheared/Navbar/Navbar';
import FooterHome from '../../Home/FooterHome/FooterHome';
import LeftSideBar from './../../onlyUseThis/LeftSideBar';


const Deshboard = () => {
    return (
        <Box>
            <Box sx={{bgcolor:"#0f0c0b"}}>
                <Navbar></Navbar>
            </Box>
           <Box>
           <Box>
           <LeftSideBar sx={{zIndex:2}}></LeftSideBar>
               {/* <Box sx={{zIndex:2}}>
               <LeftSideBar></LeftSideBar>
               </Box>
               <Box sx={{zIndex:1}}>
                   <ClientInfo></ClientInfo>
               </Box> */}

            </Box>
           </Box>
            <Box sx={{bgcolor:"#0f0c0b",boxShadow: "1px 12px 12px 14px #b4acac",color:"#fff"}}>
                <FooterHome></FooterHome>
            </Box>
        </Box>
    );
};

export default Deshboard;
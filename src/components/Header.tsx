import React from "react"
import { AppBar, Toolbar, Typography } from "@mui/material";
import { logo } from "../constants/constant";

const Header: React.FC = () => {
  return (
    <div>
       <AppBar position="static" color="transparent">
         <Toolbar>
             <img src={logo} alt="logo" style={{ width:30, marginRight:10}}/>
             <Typography>Evernote</Typography>
         </Toolbar>        
        </AppBar>    
    </div>
  )
}

export default Header

import React from "react";
import {Link} from 'react-router-dom';
import {Toolbar,AppBar,Button} from '@material-ui/core'
import './App.css'
function Nav() {
  return(
      <div>
        <AppBar className="navbar">
            <Toolbar className="tobr">
                <Link className="tobr" to="/Home"><Button color="secondary" variant="contained" className="btn">Home</Button></Link>
                <Link className="tobr" to="/Task"><Button color="secondary" variant="contained" className="btn">Task</Button></Link>
                <Link className="tobr" to="/"><Button color="secondary" variant="contained" className="btn">User</Button></Link>
                {/* <Link className="tobr" to="/Login"><Button color="secondary" variant="contained" className="btn">Login</Button></Link> */}
            </Toolbar>
        </AppBar> 
      </div>
  )
}
export default Nav;
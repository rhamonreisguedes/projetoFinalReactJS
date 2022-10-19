import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from '../../assets/img/logo.png'
import './Navbar.css'

const Navbar = () => {
    return(
        <div>
          <AppBar position={"static"} className='appbar' style={{backgroundColor: 'purple'}}>
            <Toolbar
              style={{
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h2">
                <Link to="/catalog">CHAPÉU SELETOR</Link>
              </Typography>
              <div>
                <img src={logo} alt='logo' className='logo' style={{ width: '60px'}}/>
              </div>
              <div>
                <IconButton edge="end">
                  <Link to="/cart">
                    <ShoppingCartIcon
                      style={{
                        color: "#fff",
                      }}
                    />
                  </Link>
                </IconButton>
                <IconButton
                  edge="end"
                  style={{
                    marginLeft: 16,
                  }}
                >
                  <Link to="/login">
                    <LogoutIcon
                      style={{
                        color: "#fff",
                      }}
                    />
                  </Link>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </div>
    )
}

export default Navbar;
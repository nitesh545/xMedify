// import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom"
import logo from '../assets/logo.png'

export default function Navbar() {
	let btns = ["Find Doctors", "Hospitals", "Medicines", "Surgeries", "Software for Provider", "Facilities"];
	return (
		<AppBar sx={{position: 'fixed', backgroundColor: 'transparent', boxShadow: 'none'}} elevation={0}>
			<Toolbar sx={{backgroundColor: 'rgba(42, 167, 255, 1)'}}>
				<Typography variant="body1" align='center' sx={{flexGrow: 1}}>The health and well-being of our patients
					and their health care team will always be our priority, so we follow the best practices for
					cleanliness.</Typography>
			</Toolbar>
			<Toolbar>
				<Box sx={{display: 'flex', justifyContent: 'space-between', width: '100vw', margin: '0.5rem'}}>
					<Button component={Link} to="/">
						<Box component="img" src={logo} alt="App Image" sx={{height: '2rem', marginLeft: '8rem', my: '0.5rem'}}/>
					</Button>
					<Box sx={{}}>
						{
							btns.map((btn, index) => (
								<Button key={index} variant='text' sx={{color: 'black', margin: '0.5rem'}} component={Link} to="/search">{btn}</Button>))
						}
						<Button variant="contained" component={Link} to="/bookings">My Bookings</Button>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
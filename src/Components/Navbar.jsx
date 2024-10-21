import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import logo from '../assets/logo.png'

export default function Navbar() {
	let btns = ["Find Doctors", "Hospitals", "Medicines", "Surgeries", "Software for Provider", "Facilities"];
	return (
		<AppBar sx={{position: 'static'}} elevation={0}>
			<Toolbar>
				<Typography variant="body1" align='center' sx={{flexGrow: 1}}>The health and well-being of our patients
					and their health care team will always be our priority, so we follow the best practices for
					cleanliness.</Typography>
			</Toolbar>
			<Toolbar sx={{backgroundColor: 'white'}}>
				<Box sx={{display: 'flex', justifyContent: 'space-between', width: '100vw', margin: '2rem'}}>
					<Box component="img" src={logo} alt="App Image" sx={{height: '1.75rem',}}/>
					<Box sx={{}}>
						{
							btns.map((btn, index) => (
								<Button key={index} variant='text' sx={{color: 'black', margin: '0.5rem'}}>{btn}</Button>))
						}
						<Button variant="contained">My Bookings</Button>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
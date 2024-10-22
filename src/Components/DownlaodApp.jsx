import React from 'react';
import {
	Box,
	Typography,
	Grid2,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Divider,
	Avatar,
	Button, TextField, InputAdornment
} from "@mui/material";
import img1 from "../assets/phoneapp.png";
import img2 from "../assets/arrow.png";
import {Stack} from "@mui/system";
import AppleIcon from '@mui/icons-material/Apple';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BiLogoPlayStore } from "react-icons/bi";

export default function DownlaodApp() {
	let ques = [
		"Stay Updated About Your Health",
		"Check Your Results Online",
		"Manage Your Appointments"
	]
	return (
		<Box sx={{width: '100vw', height: '65vh', backgroundColor: 'rgba(231, 240, 255, 1)'}}>
			<Box component='img' src={img2} alt='arrow-img' sx={{position: 'relative', top: '28vh', left: '46vw'}} />
			<Box sx={{paddingTop: '1rem', paddingLeft: '10rem', paddingRight: '10rem', display: 'flex',}}>
				<Box sx={{width: '50vw', height: '10vh'}}>
					<Box component='img' src={img1} alt="img1"
						 sx={{
							 alignItems: 'center',
							 justifyContent: 'center',
							 alignContent: 'center',
							 width: '72%',
							 // mt: '2rem'
						 }}/>
				</Box>
				<Box sx={{width: '50vw', height: '10vh', mt: '5rem'}}>
					<Typography variant='h2' color='rgba(27, 60, 116, 1)' fontWeight='bold'>Download the</Typography>
					<Box sx={{display: 'flex', marginTop: '0.5rem', marginBottom: '2rem'}}>
						<Typography variant='h2' color='rgba(42, 167, 255, 1)' fontWeight='bold'>Medify</Typography>
						<Typography variant='h2' color='rgba(27, 60, 116, 1)' fontWeight='bold'>App</Typography>
					</Box>
					<Typography variant='h5' color='rgba(65, 65, 70, 1)'>
						Get the link to download the app
					</Typography>
					<Box sx={{display: 'flex', marginTop: '0.5rem', marginBottom: '2rem',}}>
						<TextField
							variant={'filled'}
							placeholder="Enter phone number"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<div>
											+91
										</div>
									</InputAdornment>
								),
							}}
							sx={{
								backgroundColor: 'white',
								borderRadius: '0.5rem',
								marginRight: '1rem',
							}}
						/>
						<Button variant='contained' sx={{backgroundColor: 'rgba(42, 168, 255, 1)', borderRadius: '0.75rem'}}>Send SMS</Button>
					</Box>
					<Box sx={{display: 'flex'}}>
						<Button startIcon={<IoLogoGooglePlaystore/>} sx={{backgroundColor: 'black', color: 'white', padding: '1rem', borderRadius: '0.5rem'}}>Google Play</Button>
						<Button startIcon={<AppleIcon/>} sx={{backgroundColor: 'black', color: 'white', py: '1rem', px: '2rem', marginLeft: '2rem', borderRadius: '0.5rem'}}>App Store</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
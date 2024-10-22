import React from 'react';
import {Box, Button, TextField, Typography, Card, CardMedia} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import img1 from "../assets/LookingFor/1.png"
import img2 from "../assets/LookingFor/2.png"
import img3 from "../assets/LookingFor/3.png"
import img4 from "../assets/LookingFor/4.png"
import img5 from "../assets/LookingFor/5.png"

export default function FindPage() {
	let options = [
		{img: img1, text: 'Doctors'},
		{img: img2, text: 'Labs'},
		{img: img3, text: 'Hospitals'},
		{img: img4, text: 'Medical Store'},
		{img: img5, text: 'Ambulance'},
	];
	return (
		<Box sx={{ width: '60vw', height: '35vh', padding: '2rem',}}>
			<Box sx={{ display: 'flex', width: '50vw', padding: '2.5rem', justifyContent: 'center'}}>
				<TextField placeholder='state'></TextField>
				<TextField placeholder='city' sx={{mx: '1rem'}}></TextField>
				<Button variant="contained" color="rgba(42, 168, 255, 1)" startIcon={<SearchOutlinedIcon/>}>Search</Button>
			</Box>
			<Typography variant="h4" color="rgba(16, 40, 81, 1)" align='center'>You may be looking for</Typography>
			<Box sx={{mt: '2rem', display: 'flex', justifyContent: 'center'}}>
				{
					options.map((option, index) => (
						<Card key={index} sx={{margin: '1rem', height: '20vh', backgroundColor: 'rgba(250, 251, 254, 1)'}}>
							<CardMedia component='img' src={option.img} alt={index} sx={{width: '50%', ml: 8, mr: 8, mt: 4}}/>
							<Typography variant='h5' align='center' sx={{mt: '1rem', color: 'rgba(171, 182, 199, 1)'}}>{option.text}</Typography>
						</Card>
					))
				}
			</Box>
		</Box>
	);
}
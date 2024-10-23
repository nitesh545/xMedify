import React from 'react';
import {
	Box,
	Button,
	TextField,
	Typography,
	Card,
	CardMedia,
	Select,
	MenuItem,
	InputLabel,
	FormControl
} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import img1 from "../assets/LookingFor/1.png"
import img2 from "../assets/LookingFor/2.png"
import img3 from "../assets/LookingFor/3.png"
import img4 from "../assets/LookingFor/4.png"
import img5 from "../assets/LookingFor/5.png"

export default function FindPage(props) {
	let options = [
		{img: img1, text: 'Doctors'},
		{img: img2, text: 'Labs'},
		{img: img3, text: 'Hospitals'},
		{img: img4, text: 'Medical Store'},
		{img: img5, text: 'Ambulance'},
	];
	return (
		<Box sx={{
			width: '70vw',
			height: '50vh',
			padding: '2rem',
			backgroundColor: 'white',
			position: 'absolute',
			top: '35%',
			left: '15%'
		}}>
			<Box
				sx={{display: 'flex', width: '50vw', padding: '2.5rem', marginLeft: '12rem', justifyContent: 'center'}}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Select</InputLabel>
					<Select value={props.state} label='Select' onChange={(e) => props.updateState(e.target.value)}>
						{
							props.states.map((state, index) => (
								<MenuItem key={index} value={state}>
									{state}
								</MenuItem>
							))
						}
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Select</InputLabel>
					<Select value={props.city} label='Select' onChange={(e) => props.updateCity(e.target.value)}>
						{
							props.cities.map((cities, index) => (
								<MenuItem key={index} value={cities}>
									{cities}
								</MenuItem>
							))
						}
					</Select>
				</FormControl>
				<Button variant="contained"
						sx={{backgroundColor: 'rgba(42, 168, 255, 1)', width: '15vw', marginLeft: '2rem'}}
						startIcon={<SearchOutlinedIcon/>} onClick={()=>props.fetchHospitals()}>Search</Button>
			</Box>
			<Typography variant="h4" color="rgba(16, 40, 81, 1)" align='center'>You may be looking for</Typography>
			<Box sx={{mt: '2rem', display: 'flex', justifyContent: 'center'}}>
				{
					options.map((option, index) => (
						<Card key={index}
							  sx={{margin: '1rem', height: '20vh', backgroundColor: 'rgba(250, 251, 254, 1)'}}>
							<CardMedia component='img' src={option.img} alt={index}
									   sx={{width: '50%', ml: 8, mr: 8, mt: 4}}/>
							<Typography variant='h5' align='center'
										sx={{mt: '1rem', color: 'rgba(171, 182, 199, 1)'}}>{option.text}</Typography>
						</Card>
					))
				}
			</Box>
		</Box>
	);
}
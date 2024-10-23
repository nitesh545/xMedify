import React, {useEffect} from 'react';
import Navbar from "./Navbar";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import DownlaodApp from "./DownlaodApp";
import Footer from "./Footer";
import {Typography, Box, CardMedia, FormControl, InputLabel, Select, MenuItem, Button, Card} from "@mui/material";
import img from "../assets/verifiedblack.png"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HospitalCard from "./HospitalCard";
import Banner from "./Banner";

export default function SearchResults(props) {
	useEffect(() => {
		console.log(props.addData);
	}, []);
	return (
		<div>
			<Navbar />
			<Box sx={{backgroundColor: 'rgba(12, 140, 229, 1)', borderRadius: '2rem', borderTopLeftRadius: '0rem', borderTopRightRadius: '0rem', width: '100vw', height: '6vh', marginTop: '8rem'}}>

			</Box>
			<Card
				sx={{display: 'flex', width: '60vw', justifyContent: 'flex-end', marginTop: '-2rem', backgroundColor: 'white', padding: '2rem', borderRadius: '2rem', marginLeft: '20rem'}}>
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
						startIcon={<SearchOutlinedIcon/>} onClick={() => props.fetchHospitals()}>Search</Button>
			</Card>

			<Box sx={{
				width: '85vw',
				height: 'auto',
				display: 'flex',
				backgroundColor: 'rgba(231, 240, 255, 1)',
				padding: '10rem',
				marginTop: '4rem'
			}}>
				<Box>
					<Typography variant='h4'>15 medical centers available in Alaska</Typography>
					<Box sx={{display: 'flex', padding: '1rem'}}>
						<CardMedia component='img' src={img} alt='verified'
								   sx={{width: '1.5rem', height: '1.5rem', mr: '0.5rem', mt: '0.2rem'}}/>
						<Typography variant='h6' color='rgba(120, 120, 135, 1)'>Book appointments with minimum wait-time
							and verified doctor details</Typography>
					</Box>
					<Box>
						{
							props.allData.map((data, index)=> (
								<Box key={index} sx={{margin: '2rem'}}>
									<HospitalCard hospitalName={data["Hospital Name"]} city={data.City} state={data.State} text={data.Address} rating={data["Hospital overall rating"]} updateBookings={props.updateBookings}/>
								</Box>
							))
						}
					</Box>
				</Box>
				<Box sx={{mt: '9rem', ml: '5rem'}}>
					<Banner />
				</Box>
			</Box>

			<FrequentlyAskedQuestions/>
			<DownlaodApp/>
			<Footer/>
		</div>
	);
}
import React, {useEffect} from 'react';
import Navbar from "./Navbar";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import DownlaodApp from "./DownlaodApp";
import Footer from "./Footer";
import {
	Typography,
	Box,
	CardMedia,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Card,
	TextField
} from "@mui/material";
import img from "../assets/verifiedblack.png"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HospitalCard from "./HospitalCard";
import Banner from "./Banner";

export default function MyBookings(props) {
	return (
		<div>
			<Box sx={{backgroundColor: 'rgba(12, 140, 229, 1)', borderRadius: '2rem', borderTopLeftRadius: '0rem', borderTopRightRadius: '0rem', width: '100vw', height: '8vh', marginTop: '10rem'}}>
				<Typography variant='h2' color='white' fontWeight='bold' sx={{padding: '1rem', ml: '15rem'}}>My Bookings</Typography>
			</Box>
			<Card
				sx={{display: 'flex', width: '45vw', justifyContent: 'flex-end', marginTop: '-2rem', backgroundColor: 'white', padding: '2rem', borderRadius: '2rem', marginLeft: '60rem'}}>
				<TextField variant='outlined' placeholder='Search' fullWidth/>
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
					<Box>
						{
							props.bookings.map((booking, index)=> (
								<Box key={index} sx={{margin: '2rem'}}>
									<HospitalCard noBookings hospitalName={booking.hospitalName} city={booking.city} state={booking.state} text={booking.hospitalAddress} rating={booking.rating} updateBookings={props.updateBookings}/>
								</Box>
							))
						}
					</Box>
				</Box>
				<Box sx={{mt: '2rem', ml: '5rem'}}>
					<Banner />
				</Box>
			</Box>

			<FrequentlyAskedQuestions/>
			<DownlaodApp/>
			<Footer/>
		</div>
	);
}
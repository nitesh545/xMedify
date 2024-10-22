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
	Button
} from "@mui/material";
import img1 from "../assets/patientcaring.png";
import img2 from "../assets/verified.png";
import {Stack} from "@mui/system";

export default function PatientCaring() {
	let ques = [
		"Stay Updated About Your Health",
		"Check Your Results Online",
		"Manage Your Appointments"
	]
	return (
		<Box sx={{width: '100vw', height: '65vh', backgroundColor: 'rgba(231, 240, 255, 1)'}}>
			<Box sx={{paddingTop: '1rem', paddingLeft: '10rem', paddingRight: '10rem', display: 'flex', }}>
				<Box sx={{width: '50vw', height: '60vh'}}>
					<Box component='img' src={img1} alt="img1"
						 sx={{alignItems: 'center', justifyContent: 'center', alignContent: 'center', width: '72%', mt: '2rem'}}/>
				</Box>
				<Box sx={{width: '50vw', height: '100vh', mt: '3.5rem'}}>
					<Typography variant='h6' color='rgba(42, 167, 255, 1)' fontWeight='bold' >HELPING PATIENTS FROM AROUND THE GLOBE!!</Typography>
					<Box sx={{display: 'flex', marginTop: '0.5rem', marginBottom: '2rem'}}>
					<Typography variant='h2' color='rgba(27, 60, 116, 1)' fontWeight='bold'>Patient &nbsp;</Typography>
					<Typography variant='h2' color='rgba(42, 167, 255, 1)' fontWeight='bold'>Caring</Typography>
					</Box>
					<Typography variant='h5' color='rgba(119, 130, 157, 1)' >
						Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner.
						We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
					</Typography>
					<Stack spacing={2} sx={{mt: '1rem'}}>
						{
							ques.map((q, i) => (
								<Box sx={{
									width: '35vw',
									display: 'flex',
									paddingTop: '2rem',
								}} key={i}>
									<Avatar src={img2} sx={{padding: '0.5rem'}} />
									<Typography variant='h5' px={2} fontWeight='bold' color='rgba(27, 60, 116, 1)'>{q}</Typography>
								</Box>
							))
						}
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}
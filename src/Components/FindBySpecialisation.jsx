import React from 'react';
import { Box, Grid2, Typography, Button, Card } from "@mui/material";
import img1 from "../assets/Specialisation/1.png";
import img2 from "../assets/Specialisation/2.png";
import img3 from "../assets/Specialisation/3.png";
import img4 from "../assets/Specialisation/4.png";
import img5 from "../assets/Specialisation/5.png";
import img6 from "../assets/Specialisation/6.png";
import img7 from "../assets/Specialisation/7.png";
import img8 from "../assets/Specialisation/8.png";

export default function FindBySpecialisation() {
	const cardDetails = [
		{ img: img1, text: 'Dentistry', alt: 'Dentistry icon' },
		{ img: img2, text: 'Primary Care', alt: 'Primary care icon' },
		{ img: img3, text: 'Cardiology', alt: 'Cardiology icon' },
		{ img: img4, text: 'MRI Resonance', alt: 'MRI resonance icon' },
		{ img: img5, text: 'Blood Test', alt: 'Blood test icon' },
		{ img: img6, text: 'Psychologist', alt: 'Psychologist icon' },
		{ img: img7, text: 'Laboratory', alt: 'Laboratory icon' },
		{ img: img8, text: 'X-Ray', alt: 'X-ray icon' },
	];

	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '80vh',
				backgroundColor: 'rgba(232, 241, 255, 0.47)',
				padding: { xs: '2rem', md: '4rem' },
				justifyContent: 'center',
				alignItems: 'center',
				alignContent: 'center',
			}}
		>
			<Typography align="center" variant="h2" fontWeight="bolder" color='rgba(27, 60, 116, 1)' mb={12}>
				Find By Specialisation
			</Typography>
			<Grid2 container spacing={2} justifyContent="center" sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
				{cardDetails.map((cardDetail, index) => (
					<Grid2 key={index} item size={{xs:12, sm:6, md:3}}>
						<Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
							<Box component="img" src={cardDetail.img} alt={cardDetail.alt} sx={{ width: '80px', height: '80px', marginBottom: '1rem' }} />
							<Typography align="center" variant="body1">{cardDetail.text}</Typography>
						</Card>
					</Grid2>
				))}
			</Grid2>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Button variant="contained" onClick={()=>{}}>View All</Button>
			</Box>
		</Box>
	);
}
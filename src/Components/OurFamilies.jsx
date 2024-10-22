import React from 'react';
import {Box, Typography, Grid, Paper, Stack, Card, CardMedia, CardContent} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ScienceIcon from '@mui/icons-material/Science';
import PersonIcon from '@mui/icons-material/Person';
import img1 from "../assets/OurFamilies/1.png";
import img2 from "../assets/OurFamilies/2.png";
import img3 from "../assets/OurFamilies/3.png";
import img4 from "../assets/OurFamilies/4.png";

const OurFamilies = () => {
	let stats1 = [
		{img: img1, numbers: "5000+", text: "Happy Patients"},
		{img: img3, numbers: "1000+", text: "Laboratories"}
	];

	let stats2 = [
		{img: img2, numbers: "200+", text: "Hospitals"},
		{img: img4, numbers: "700+", text: "Expert Doctors"}
	];

	return (
		<Box sx={{width: '100vw', height: '85vh', backgroundColor: 'rgba(231, 240, 255, 1)'}}>
			<Box sx={{paddingTop: '1rem', paddingLeft: '10rem', paddingRight: '10rem', display: 'flex'}}>
				<Box sx={{width: '50vw', height: '100vh', mt: '10rem'}}>
					<Typography variant='h6' color='rgba(42, 167, 255, 1)' fontWeight='bold'>CARING FOR THE HEALTH OF
						YOU AND YOUR FAMILY.</Typography>
					<Box sx={{display: 'flex', marginTop: '0.5rem', marginBottom: '2rem'}}>
						<Typography variant='h2' color='rgba(27, 60, 116, 1)'
									fontWeight='bold'>Our Families</Typography>
					</Box>
					<Typography variant='h5' color='rgba(119, 130, 157, 1)' lineHeight={4}>
						We will work with you to develop individualised care plans, including management of chronic
						diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner
						you require. We treat all enquiries sensitively and in the strictest confidence.
					</Typography>
				</Box>
				<Box sx={{width: '50vw', height: '60vh', display: 'flex', justifyContent: 'flex-end'}}>
					<Box sx={{diplay: 'flex', flexDirection: 'column', mr: '2rem'}}>
						{
							stats1.map((stat, i) => (
								<Card key={i} sx={{mt: '3rem', height: '32vh', width: '12vw'}} elevation={6}>
									<CardMedia component='img' src={stat.img} alt={i} sx={{width: '40%', ml: 8, mr: 8, mt: 4}}/>
									<CardContent>
										<Typography variant='h4' align='center' color='rgba(27, 60, 116, 1)'>{stat.numbers}</Typography>
										<Typography variant='h6' align='center' color='rgba(119, 130, 157, 1)' mt={2}>{stat.text}</Typography>
									</CardContent>
								</Card>
							))
						}
					</Box>
					<Box sx={{diplay: 'flex', flexDirection: 'column', mt: '2rem'}}>
						{
							stats2.map((stat, i) => (
								<Card key={i} sx={{mt: '3rem', height: '32vh', width: '12vw'}} elevation={6}>
									<CardMedia component='img' src={stat.img} alt={i} sx={{width: '40%', ml: 8, mr: 8, mt: 4}}/>
									<CardContent>
										<Typography variant='h4' align='center' color='rgba(27, 60, 116, 1)'>{stat.numbers}</Typography>
										<Typography variant='h6' align='center' color='rgba(119, 130, 157, 1)' mt={2}>{stat.text}</Typography>
									</CardContent>
								</Card>
							))
						}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default OurFamilies;
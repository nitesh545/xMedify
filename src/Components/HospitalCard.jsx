import React from 'react';
import {Avatar, Box, Button, Card, CardMedia, Divider, IconButton, Typography} from "@mui/material";
import img from "../assets/hospital.png"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export default function HospitalCard(props) {
	return (
		<Card sx={{width: '35vw', height: '18vh', borderRadius: '1rem'}}>
			<Box sx={{display: 'flex', mt: '1rem', mb: '1rem'}}>
				<CardMedia component='img' sx={{mr: 2}} src={img} alt='hosiptalimg'
						   sx={{width: '7vw', padding: '1.25rem'}}/>
				<Box>
					<Typography variant='h5' sx={{color: 'rgba(20, 190, 240, 1)'}}>Fortis Hospital Richmond
						Road</Typography>
					<Typography variant='h6' fontWeight='bold'>Bangalore, Karnataka</Typography>
					<Typography variant='h6'>Hosiptal Name</Typography>
					<Box sx={{display: 'flex'}}>
						<Typography variant='h6' fontWeight='bold' color='rgba(2, 164, 1, 1)'>FREE</Typography>
						<Typography variant='h6' color='rgba(120, 120, 135, 1)' sx={{
							textDecoration: 'line-through',
							marginLeft: '0.5rem',
							marginRight: '0.5rem'
						}}>₹500</Typography>
						<Typography variant='h6'>Consultation fee at clinic</Typography>
						<Divider/>
					</Box>
					<Box sx={{
						backgroundColor: 'rgba(0, 165, 0, 1)',
						color: 'white',
						width: '3.5rem',
						height: '1.75rem',
						borderRadius: '0.25rem',
						// pt: '0.5rem',
						display: 'flex'
					}}>
						<ThumbUpAltIcon fontSize='small' sx={{ml:'0.25rem', mt: '0.25rem'}}/>
						<Typography variant='h6' sx={{pl: '0.5rem'}}>5</Typography>
					</Box>
				</Box>
				<Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', ml: '1.5rem'}}>
					<Typography color='rgba(1, 164, 0, 1)' variant='body1' align='center'>Available Today</Typography>
					<Button sx={{backgroundColor: 'rgba(20, 190, 240, 1)'}} variant='contained'>Book FREE Center
						Visit</Button>
				</Box>
			</Box>
		</Card>
	);
}
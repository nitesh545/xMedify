import React, {useEffect} from 'react';
import {Avatar, Box, Button, Card, CardMedia, Divider, IconButton, Typography} from "@mui/material";
import img from "../assets/hospital.png"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SlotTabs from "./SlotTabs";

export default function HospitalCard(props) {
	const [showSlots, setShowSlots] = React.useState(false);
	const [slotSelected, setSlotSelected] = React.useState("");
	const [prevSelectedSlots, setPrevSelectedSlots] = React.useState("");

	useEffect(() => {
		if(slotSelected.length < 1 || prevSelectedSlots == slotSelected){return;}
		props.updateBookings(props.hospitalName, props.text, props.city, props.state, slotSelected, "Today", props.rating);
		setPrevSelectedSlots(slotSelected);
	}, [slotSelected]);

	const updateSlotSelected = (value) => {
		setSlotSelected(value);
	}

	return (
		<Card sx={{width: '45vw', height: 'auto', borderRadius: '1rem'}}>
			<Box sx={{display: 'flex', mt: '1rem', mb: '1rem'}}>
				<CardMedia component='img' sx={{mr: 2}} src={img} alt='hosiptalimg'
						   sx={{width: '7vw', padding: '1.25rem'}}/>
				<Box sx={{width: '25vw'}}>
					<Typography variant='h5' sx={{color: 'rgba(20, 190, 240, 1)', mt: '1rem'}}>{props.hospitalName}</Typography>
					<Typography variant='h6' fontWeight='bold'>{props.city}, {props.state}</Typography>
					<Typography variant='h6'>{props.text}</Typography>
					<Box sx={{display: 'flex', mt: '1rem'}}>
						<Typography variant='h6' fontWeight='bold' color='rgba(2, 164, 1, 1)'>FREE</Typography>
						<Typography variant='h6' color='rgba(120, 120, 135, 1)' sx={{
							textDecoration: 'line-through',
							marginLeft: '0.5rem',
							marginRight: '0.5rem'
						}}>₹500</Typography>
						<Typography variant='h6'>Consultation fee at clinic</Typography>
						<Divider/>
					</Box>
					{
						!showSlots && (<Box sx={{
							backgroundColor: 'rgba(0, 165, 0, 1)',
							color: 'white',
							width: '3.5rem',
							height: '1.75rem',
							borderRadius: '0.25rem',
							// pt: '0.5rem',
							display: 'flex'
						}}>
							<ThumbUpAltIcon fontSize='small' sx={{ml: '0.25rem', mt: '0.25rem'}}/>
							<Typography variant='h6' sx={{pl: '0.5rem'}}>{props.rating == parseInt(props.rating) ? props.rating : 0}</Typography>
						</Box>)
					}
				</Box>
				<Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', ml: '1.5rem'}}>
					<Typography color='rgba(1, 164, 0, 1)' variant='body1' align='center'>Available Today</Typography>
					<Button sx={{backgroundColor: 'rgba(20, 190, 240, 1)'}} variant='contained'
							onClick={() => showSlots ? setShowSlots(false) : setShowSlots(true)}>Book FREE Center
						Visit</Button>
				</Box>
			</Box>

			{
				showSlots && (
					<SlotTabs updateSlotSelected={updateSlotSelected}/>
				)
			}
		</Card>
	);
}

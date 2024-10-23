import React from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";
import img from "../assets/docs.png"
import FindPage from "./FindPage";

export default function Home(props) {
	const [open, setOpen] = React.useState(false);
	const handleClose = () => {setOpen(false);};
	return (
		<Box sx={{
			width: '100vw',
			height: '100vh',
			display: 'flex',
			backgroundColor: 'rgba(231, 240, 255, 1)',
			padding: '10rem'
		}}>
			<Box sx={{width: '50vw', mt: '14rem'}}>
				<Typography variant="h4" color='rgba(16, 40, 81, 1)'>Skip the travel! Find Online</Typography>
				<Box sx={{display: 'flex', marginTop: '0.5rem', marginBottom: '2rem',}}>
					<Typography variant='h1' color='rgba(0, 0, 0, 1)' fontWeight='bolder'>Medical &nbsp;</Typography>
					<Typography variant='h1' color='rgba(42, 167, 255, 1)' fontWeight='bolder'>Centers</Typography>
				</Box>
				<Typography variant='h4' color='rgba(92, 97, 105, 1)' sx={{width: '35vw', lineHeight: '4rem'}}>Connect
					instantly with a 24x7 specialist or choose
					to video visit a particular doctor.</Typography>
				<Button variant='contained' sx={{
					backgroundColor: 'rgba(42, 168, 255, 1)',
					mt: '2rem',
					py: '1rem',
					px: '2rem',
					borderRadius: '0.5rem'
				}} onClick={()=>setOpen(true)}>Find Centers</Button>
			</Box>
			<Box sx={{width: '50vw', mt: '8rem'}}>
				<Box component='img' src={img} alt='doctorsimg' sx={{width: '50rem'}}/>
			</Box>
			<Modal open={open} onClose={handleClose}>
				<FindPage updateState={props.updateState} updateCity={props.updateCity} states={props.states} cities={props.cities} state={props.state} city={props.city} fetchHospitals={props.fetchHospitals} />
			</Modal>
		</Box>
	);
}
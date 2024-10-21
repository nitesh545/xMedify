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
import img1 from "../assets/faq.png";
import img2 from "../assets/hearthand.png";
import {Stack} from "@mui/system";

export default function FrequentlyAskedQuestions() {
	let ques = [
		"Why choose our medical for your family?",
		"Why we are different from others?",
		"Trusted & experience senior care & love",
		"How to get appointment for emergency cases?"
	]
	return (
		<Box sx={{width: '100vw', height: '100vh'}}>
			<Box component='img' src={img2} alt="img1" sx={{
				position: 'absolute',
				left: '40vw',
				top: '50vh',
				alignItems: 'center',
				justifyContent: 'center'
			}}/>
			<Typography variant="h6" fontWeight='bold' align='center' color='rgba(42, 167, 255, 1)'>Get Your
				Answer</Typography>
			<Typography variant="h2" fontWeight='bold' align='center' color='rgba(27, 60, 116, 1)'>Frequently Asked
				Questions</Typography>
			<Box sx={{paddingTop: '5rem', paddingLeft: '10rem', paddingRight: '10rem', display: 'flex'}}>
				<Box sx={{width: '50vw', height: '100vh'}}>
					<Box component='img' src={img1} alt="img1"
						 sx={{alignItems: 'center', justifyContent: 'center', width: '90%'}}/>
				</Box>
				<Box sx={{width: '50vw', height: '100vh'}}>
					<Stack spacing={2}>
						{
							ques.map((q, i) => (
								<Box sx={{
									width: '35vw',
									display: 'flex',
									justifyContent: 'space-between',
									paddingTop: '4rem'
								}} key={i}>
									<Typography variant='h4' color='rgba(27, 60, 116, 1)'>{q}</Typography>
									<Typography variant='h4' color='rgba(42, 167, 255, 1)'>+</Typography>
								</Box>
							))
						}
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}
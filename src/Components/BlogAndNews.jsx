import React from 'react';
import {Box, Typography, Grid2, Card, CardActionArea, CardMedia, CardContent, Divider, Avatar} from "@mui/material";
import img1 from "../assets/detox.png";
import img2 from "../assets/rebeccalee.png";

export default function BlogAndNews() {
	let feeds = [
		{img: img1, category: 'Medical', date: 'March 31, 2022', text: '6 tips to protect your mental health when you are sick', avatar: img2, name: 'Rebecca Lee'},
		{img: img1, category: 'Medical', date: 'March 31, 2022', text: '6 tips to protect your mental health when you are sick', avatar: img2, name: 'Rebecca Lee'},
		{img: img1, category: 'Medical', date: 'March 31, 2022', text: '6 tips to protect your mental health when you are sick', avatar: img2, name: 'Rebecca Lee'},
	]
	return (
		<Box sx={{width: '100vw', height: '100vh'}}>
			<Box sx={{marginTop: '10rem'}}>
			<Typography variant="h6" fontWeight='bold' align='center' color='rgba(42, 167, 255, 1)'>Blog & Post</Typography>
			<Typography variant="h2" fontWeight='bold' align='center' color='rgba(27, 60, 116, 1)'>Read Our Latest News</Typography>
			<Box sx={{paddingTop: '5rem', paddingLeft: '10rem', paddingRight: '10rem'}}>
				<Grid2 container spacing={2}>
					{
						feeds.map((feed, index)=> (
							<Grid2 size={4}>
								<Card>
									<CardActionArea>
										<CardMedia component='img' src={feed.img} alt={index}/>
										<CardContent>
											<Box sx={{display: 'flex'}}>
												<Typography variant='body2' color='rgba(119, 130, 157, 1)'>{feed.category} | {feed.date}</Typography>
											</Box>
											<Typography variant='h6'>{feed.text}</Typography>
											<Box sx={{display: 'flex',}}>
												<Avatar src={feed.avatar} sx={{marginTop: '1rem', padding: '0.25rem'}} />
												<Typography sx={{marginTop: '1.5rem', marginLeft: '0.5rem'}}>{feed.name}</Typography>
											</Box>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid2>
						))
					}
				</Grid2>
			</Box>
			</Box>
		</Box>
	);
}
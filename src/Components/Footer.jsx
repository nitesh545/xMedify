import React from 'react';
import { Box, Typography, Grid, Link, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import logo from "../assets/logo.png"

const Footer = () => {
	const linkGroups = [
		{
			title: 'Medify',
			links: ['About Us', 'Our Pricing', 'Our Gallery', 'Appointment', 'Privacy Policy']
		},
		{
			title: 'Services',
			links: ['Orthology', 'Neurology', 'Dental Care', 'Ophthalmology', 'Cardiology']
		},
		{
			title: 'Quick Links',
			links: ['About Us', 'Our Pricing', 'Our Gallery', 'Appointment', 'Privacy Policy']
		}
	];

	return (
		<Box sx={{ bgcolor: '#003366', color: 'white', py: 4 }}>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					<Grid item xs={12} md={3}>
							<Box component="span" sx={{p: 0.5, mr: 1, }}>
								<Box component='img' src={logo} alt="logo-img" mt={2.5} />
							</Box>
						<Box sx={{ display: 'flex', mt: 8 }}>
							{[FacebookIcon, TwitterIcon, YouTubeIcon, PinterestIcon].map((Icon, index) => (

								<IconButton key={index} sx={{ mr: 1, color: 'rgba(42, 167, 255, 1)', backgroundColor: 'white', padding: '0.25rem' }}>
									<Icon />
								</IconButton>

							))}
						</Box>
					</Grid>
					{linkGroups.map((group, index) => (
						<Grid item xs={12} sm={6} md={3} key={index} mt={2}>
							{group.links.map((link, linkIndex) => (
								<Typography variant="body2" key={linkIndex} sx={{ mb: 1 }}>
									<Link href="#" color="inherit" underline="hover">
										> &nbsp;{link}
									</Link>
								</Typography>
							))}
						</Grid>
					))}
				</Grid>
				<Typography variant="body2" sx={{ mt: 4, textAlign: 'left', borderTop: '1px solid #1e5799', pt: 2 }}>
					Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
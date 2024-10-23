import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const PromotionalBanner = styled(Paper)(({ theme }) => ({
	background: '#fff',
	padding: theme.spacing(4),
	borderRadius: 16,
	textAlign: 'left',
	marginBottom: theme.spacing(3)
}));

const MainHeading = styled(Typography)(({ theme }) => ({
	fontSize: '2.5rem',
	fontWeight: 500,
	marginBottom: theme.spacing(2),
	color: '#333'
}));

const AppointmentText = styled(Typography)(({ theme }) => ({
	fontSize: '3rem',
	fontWeight: 600,
	marginBottom: theme.spacing(1),
	'& .free': {
		color: '#33A9FF'
	},
	'& .regular': {
		color: '#2F3B8C'
	}
}));

const LimitedOffer = styled(Box)(({ theme }) => ({
	backgroundColor: '#33A9FF',
	color: 'white',
	padding: '8px 24px',
	borderRadius: 25,
	display: 'inline-block',
	marginBottom: theme.spacing(3),
	fontSize: '1.2rem',
	fontWeight: 500
}));

const Hashtag = styled(Typography)(({ theme }) => ({
	color: '#33A9FF',
	fontSize: '2rem',
	fontWeight: 500,
	marginBottom: theme.spacing(2)
}));

const Disclaimer = styled(Typography)(({ theme }) => ({
	color: '#666',
	fontSize: '0.875rem',
	marginTop: theme.spacing(2)
}));

const Banner = () => {
	return (
		<Box maxWidth="lg">
			<PromotionalBanner elevation={0}>
				<MainHeading>
					This World Oral Health Day,
				</MainHeading>

				<AppointmentText>
					Get a <span className="free">FREE</span> <span className="regular">Appointment</span>
				</AppointmentText>

				<AppointmentText sx={{ marginBottom: 3 }}>
					<span className="regular">with Top Dentists.</span>
				</AppointmentText>

				<LimitedOffer>
					LIMITED PERIOD OFFER
				</LimitedOffer>

				<Hashtag>
					#BeSensitiveToOralHealth
				</Hashtag>

				<Disclaimer>
					*T&C Apply - only consultation fee. Procedures / surgeries not covered
				</Disclaimer>
			</PromotionalBanner>
		</Box>
	);
};

export default Banner;
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import img1 from "../assets/Doctors/1.png";
import img2 from "../assets/Doctors/2.png";
import img3 from "../assets/Doctors/3.png";
import {A11y, Pagination} from "swiper/modules";

export default function MedicalSpecialist() {
	const slides = [
		{img: img1, text: 'Dr. Ahmad Khan', category: 'Neurologist', alt: '100OFF icon'},
		{img: img2, text: 'Dr. Heena Sachdeva', category: 'Orthopadics', alt: '30OFF icon'},
		{img: img3, text: 'Dr. Ankur Sharma', category: 'Medicine', alt: '100OFF icon'},
		{img: img1, text: 'Dr. Ahmad Khan', category: 'Neurologist', alt: '100OFF icon'},
		{img: img2, text: 'Dr. Heena Sachdeva', category: 'Orthopadics', alt: '30OFF icon'},
		{img: img3, text: 'Dr. Ankur Sharma', category: 'Medicine', alt: '100OFF icon'},
	];
	return (
		<Box sx={{width: '100vw', height: '100vh'}}>
			<Typography variant='h2' fontWeight='bold' align='center' color='rgba(27, 60, 116, 1)'>Our Medical Specialists</Typography>
			<Box sx={{pt: '10rem'}}>
				<Box sx={{position: 'relative', paddingBottom: '40px'}}>
					<Swiper
						modules={[Pagination, A11y]}
						spaceBetween={1}
						slidesPerView={3.5}
						loop={true}
						pagination={{
							clickable: true,
							el: '.swiper-pagination-two',
						}}
					>
						{slides.map((slide, i) => (
							<SwiperSlide key={i} sx={{}}>
								<Card sx={{width: '25vw', borderRadius: '0.5rem', borderTopRightRadius: '17rem', borderTopLeftRadius: '17rem'}} elevation={10}>
									<CardActionArea>
										<CardMedia component='img' src={slide.img} alt={slide.text} sx={{}}/>
										<CardContent>
											<Typography variant='h5' align='center' color='rgba(27, 60, 116, 1)'>{slide.text}</Typography>
											<Typography variant='h6' align='center' color='rgba(42, 167, 255, 1)'>{slide.category}</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
					<Box className="swiper-pagination-two App" sx={{position: 'absolute', bottom: 0, left: 0, right: 0}}/>
				</Box>
			</Box>
		</Box>
	);
};
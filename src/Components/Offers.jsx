import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Box, Card, CardActionArea, CardMedia} from "@mui/material";
import img1 from "../assets/Offers/1.png";
import img2 from "../assets/Offers/2.png";
import {A11y, Pagination} from "swiper/modules";

export default function Offers() {
	const slides = [
		{img: img1, text: '100OFF', alt: '100OFF icon'},
		{img: img2, text: '30OFF', alt: '30OFF icon'},
		{img: img1, text: '100OFF', alt: '100OFF icon'},
		{img: img2, text: '30OFF', alt: '30OFF icon'},
	];
	return (
		<Box sx={{width: '100vw', height: '50vh'}}>
			<Box sx={{padding: '10rem'}}>
				<Box sx={{ position: 'relative', paddingBottom: '40px' }}>
					<Swiper
						modules={[Pagination, A11y]}
						spaceBetween={10}
						slidesPerView={3}
						loop={true}
						pagination={{
							clickable: true,
							el: '.swiper-pagination',
						}}
					>
						{slides.map((slide, i) => (
							<SwiperSlide key={i}>
								<Card sx={{ width: '25vw', borderRadius: '1.5rem' }}>
									<CardActionArea>
										<CardMedia component='img' src={slide.img} alt={slide.text}/>
									</CardActionArea>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
					<Box className="swiper-pagination" sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
				</Box>
			</Box>
		</Box>
	);
};
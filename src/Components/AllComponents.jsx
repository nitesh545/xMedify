// App.js
//
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Navbar from './components/Navbar';
// import LandingPage from './components/LandingPage';
// import SearchResults from './components/SearchResults';
// import BookingInterface from './components/BookingInterface';
// import MyBookings from './components/MyBookings';
//
// const theme = createTheme();
//
// function App() {
// 	return (
// 		<ThemeProvider theme={theme}>
// 			<CssBaseline />
// 			<Router>
// 				<Navbar />
// 				<Switch>
// 					<Route exact path="/" component={LandingPage} />
// 					<Route path="/search-results" component={SearchResults} />
// 					<Route path="/booking" component={BookingInterface} />
// 					<Route path="/my-bookings" component={MyBookings} />
// 				</Switch>
// 			</Router>
// 		</ThemeProvider>
// 	);
// }
//
// export default App;
//
// // Navbar.js
// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
//
// function Navbar() {
// 	return (
// 		<AppBar position="static">
// 			<Toolbar>
// 				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// 					Medical Center App
// 				</Typography>
// 				<Button color="inherit" component={Link} to="/">
// 					Find Doctors
// 				</Button>
// 				<Button color="inherit" component={Link} to="/">
// 					Hospitals
// 				</Button>
// 				<Button color="inherit" component={Link} to="/">
// 					Medicines
// 				</Button>
// 			</Toolbar>
// 		</AppBar>
// 	);
// }
//
// export default Navbar;
//
// // LandingPage.js
// import React, { useState } from 'react';
// import { Container, Typography, Box } from '@mui/material';
// import { StateSelect, CitySelect } from 'react-country-state-city';
// import { useHistory } from 'react-router-dom';
//
// function LandingPage() {
// 	const [state, setState] = useState('');
// 	const [city, setCity] = useState('');
// 	const history = useHistory();
//
// 	const handleSearch = () => {
// 		history.push(`/search-results?state=${state}&city=${city}`);
// 	};
//
// 	return (
// 		<Container maxWidth="sm">
// 			<Box sx={{ mt: 4 }}>
// 				<Typography variant="h4" align="center" gutterBottom>
// 					Find Medical Centers
// 				</Typography>
// 				<StateSelect
// 					countryCode="US"
// 					value={state}
// 					onChange={(newState) => setState(newState)}
// 				/>
// 				<CitySelect
// 					countryCode="US"
// 					stateCode={state}
// 					value={city}
// 					onChange={(newCity) => setCity(newCity)}
// 				/>
// 				<Button variant="contained" onClick={handleSearch}>
// 					Search
// 				</Button>
// 			</Box>
// 		</Container>
// 	);
// }
//
// export default LandingPage;
//
// // SearchResults.js
// import React, { useState, useEffect } from 'react';
// import { Container, Typography, Box, Button } from '@mui/material';
// import { useLocation, useHistory } from 'react-router-dom';
//
// function SearchResults() {
// 	const [medicalCenters, setMedicalCenters] = useState([]);
// 	const location = useLocation();
// 	const history = useHistory();
//
// 	useEffect(() => {
// 		const searchParams = new URLSearchParams(location.search);
// 		const state = searchParams.get('state');
// 		const city = searchParams.get('city');
//
// 		// Fetch medical centers based on state and city from the healthcare API
// 		// and update the medicalCenters state
// 	}, [location]);
//
// 	const handleBooking = (centerId) => {
// 		history.push(`/booking?centerId=${centerId}`);
// 	};
//
// 	return (
// 		<Container maxWidth="sm">
// 			<Box sx={{ mt: 4 }}>
// 				<Typography variant="h4" align="center" gutterBottom>
// 					Medical Centers
// 				</Typography>
// 				{medicalCenters.map((center) => (
// 					<Box key={center.id} sx={{ mb: 2 }}>
// 						<Typography variant="h6">{center.name}</Typography>
// 						<Button variant="contained" onClick={() => handleBooking(center.id)}>
// 							Book Appointment
// 						</Button>
// 					</Box>
// 				))}
// 			</Box>
// 		</Container>
// 	);
// }
//
// export default SearchResults;
//
// // BookingInterface.js
// import React, { useState } from 'react';
// import { Container, Typography, Box, Button } from '@mui/material';
// import { DatePicker, TimePicker } from '@mui/lab';
//
// function BookingInterface() {
// 	const [selectedDate, setSelectedDate] = useState(null);
// 	const [selectedTime, setSelectedTime] = useState(null);
//
// 	const handleBooking = () => {
// 		// Send booking details to the backend API
// 	};
//
// 	return (
// 		<Container maxWidth="sm">
// 			<Box sx={{ mt: 4 }}>
// 				<Typography variant="h4" align="center" gutterBottom>
// 					Book Appointment
// 				</Typography>
// 				<DatePicker
// 					label="Select Date"
// 					value={selectedDate}
// 					onChange={(date) => setSelectedDate(date)}
// 					minDate={new Date()}
// 					maxDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
// 				/>
// 				<TimePicker
// 					label="Select Time"
// 					value={selectedTime}
// 					onChange={(time) => setSelectedTime(time)}
// 				/>
// 				<Button variant="contained" onClick={handleBooking}>
// 					Book
// 				</Button>
// 			</Box>
// 		</Container>
// 	);
// }
//
// export default BookingInterface;
//
// // MyBookings.js
// import React, { useState, useEffect } from 'react';
// import { Container, Typography, Box } from '@mui/material';
//
// function MyBookings() {
// 	const [bookings, setBookings] = useState([]);
//
// 	useEffect(() => {
// 		// Fetch user's bookings from the backend API and update the bookings state
// 	}, []);
//
// 	return (
// 		<Container maxWidth="sm">
// 			<Box sx={{ mt: 4 }}>
// 				<Typography variant="h4" align="center" gutterBottom>
// 					My Bookings
// 				</Typography>
// 				{bookings.map((booking) => (
// 					<Box key={booking.id} sx={{ mb: 2 }}>
// 						<Typography variant="h6">{booking.medicalCenter}</Typography>
// 						<Typography>Date: {booking.date}</Typography>
// 						<Typography>Time: {booking.time}</Typography>
// 					</Box>
// 				))}
// 			</Box>
// 		</Container>
// 	);
// }
//
// export default MyBookings;
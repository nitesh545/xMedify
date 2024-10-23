import logo from './logo.svg';
import './App.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useEffect} from "react";
import Navbar from "./Components/Navbar";
import FindBySpecialisation from "./Components/FindBySpecialisation";
import Offers from "./Components/Offers";
import MedicalSpecialist from "./Components/MedicalSpecialist";
import BlogAndNews from "./Components/BlogAndNews";
import FrequentlyAskedQuestions from "./Components/FrequentlyAskedQuestions";
import PatientCaring from "./Components/PatientCaring";
import OurFamilies from "./Components/OurFamilies";
import Footer from "./Components/Footer";
import DownlaodApp from "./Components/DownlaodApp";
import Home from "./Components/Home";
import FindPage from "./Components/FindPage";
import HospitalCard from "./Components/HospitalCard";
import SearchResults from "./Components/SearchResults";

const theme = createTheme();

function App() {
	const [state, setState] = React.useState("");
	const [states, setStates] = React.useState([]);
	const [city, setCity] = React.useState("");
	const [cities, setCities] = React.useState([]);
	const [allData, setAllData] = React.useState([]);
	const [bookings, setBookings] = React.useState([]);

	useEffect(() => {
		fetchStates();
	}, []);

	useEffect(() => {
		fetchCities();
	}, [state]);

	useEffect(() => {
		console.log(allData);
	}, [allData]);

	useEffect(() => {
		console.log(bookings);
	}, [bookings]);

	const updateState = (value) => {
		setState(value);
	}

	const updateCity = (value) => {
		setCity(value);
	}

	const updateBookings = (hospitalName, hospitalAddress, city, state, time, date, rating) => {
		setBookings((prevState) => [...prevState, {hospitalName, hospitalAddress, city, state, time, date, rating}]);
	}

	const fetchStates = () => {
		fetch("https://meddata-backend.onrender.com/states").then((response) => response.json()).then((res) => setStates(res)).catch((error) => {console.log(error);});
	}

	const fetchCities = () => {
		fetch("https://meddata-backend.onrender.com/cities/" + state).then((response) => response.json()).then((res) => setCities(res)).catch((error) => {console.log(error);});
	}

	const fetchHospitals = () => {
		fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`).then((response) => response.json()).then((res) => setAllData(res)).catch((error) => {console.log(error);});
	}

	return (
		<ThemeProvider theme={theme}>
			{/*<CssBaseline/>*/}
			{/*<Navbar/>*/}
			{/*<Home updateState={updateState} updateCity={updateCity} states={states} cities={cities} state={state} city={city} fetchHospitals={fetchHospitals} />*/}
			{/*<HospitalCard />*/}
			{/*<Offers/>*/}
			{/*<FindBySpecialisation/>*/}
			{/*<MedicalSpecialist/>*/}
			{/*<PatientCaring/>*/}
			{/*<BlogAndNews/>*/}
			{/*<OurFamilies/>*/}
			{/*<FrequentlyAskedQuestions/>*/}
			{/*<DownlaodApp />*/}
			{/*<Footer />*/}

			<SearchResults updateState={updateState} updateCity={updateCity} states={states} cities={cities} state={state} city={city} fetchHospitals={fetchHospitals} allData={allData} updateBookings={updateBookings}/>
		</ThemeProvider>
	);
}

export default App;

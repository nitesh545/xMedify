import logo from './logo.svg';
import './App.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";
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

const theme = createTheme();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<Navbar/>
			<Home />
			<Offers/>
			<FindBySpecialisation/>
			<MedicalSpecialist/>
			<PatientCaring/>
			<BlogAndNews/>
			<OurFamilies/>
			<FrequentlyAskedQuestions/>
			<DownlaodApp />
			<Footer />
		</ThemeProvider>
	);
}

export default App;

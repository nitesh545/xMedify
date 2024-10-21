import logo from './logo.svg';
import './App.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Navbar from "./Components/Navbar";
import FindBySpecialisation from "./Components/FindBySpecialisation";
import Offers from "./Components/Offers";
import MedicalSpecialist from "./Components/MedicalSpecialist";
import BlogAndNews from "./Components/BlogAndNews";
import FrequentlyAskedQuestions from "./Components/FrequentlyAskedQuestions";

const theme = createTheme();

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Navbar />
          <FrequentlyAskedQuestions />
          <BlogAndNews />
          <MedicalSpecialist />
          <Offers />
          <FindBySpecialisation />
      </ThemeProvider>
  );
}

export default App;

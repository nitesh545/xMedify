import logo from './logo.svg';
import './App.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Navbar from "./Components/Navbar";

const theme = createTheme();

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Navbar />
      </ThemeProvider>
  );
}

export default App;

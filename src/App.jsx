import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import "./App.css";
import Movie from "./pages/Movie";
import theme from "./theme";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Genre from "./pages/Genre";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/genre/:genreId" element={<Genre/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

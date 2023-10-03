import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import "./App.css";
import Movie from "./pages/Movie";
import theme from "./theme";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

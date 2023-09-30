import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import "./App.css";

import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

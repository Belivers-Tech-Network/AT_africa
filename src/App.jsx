import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./Style/GlobalStyles";
import LandingPage from "./page/LandingPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Schedule from "./pages/Schedule";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Privacy" element={<PrivacyPolicy />} />
          <Route path="/Terms" element={<TermsAndConditions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

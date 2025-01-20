import "./App.css";
import Home from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Header from "./components/Header";
import BookingPage from "./components/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Privacy" element={<PrivacyPolicy />} />
          <Route path="/Terms" element={<TermsAndConditions />} />
          <Route path="/Payment" element={<BookingPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

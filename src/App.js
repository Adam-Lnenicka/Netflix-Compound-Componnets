import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

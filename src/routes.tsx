import About from "./components/pages/index";
import Services from "./components/pages/Services";
import Education from "./components/pages/Education";

import Projects from "./components/pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/education" element={<Education />} />

        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

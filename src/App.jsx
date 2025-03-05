import Homepage from "./Pages/Home";
import Works from "./Pages/Works";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import WorkDetail from "./Pages/WorkDetail";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works/:id" element={<WorkDetail />} />
        </Routes>
    </HashRouter>
  );
}

export default App;

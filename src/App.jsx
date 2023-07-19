import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./routes/Home";
import About from "./routes/About";
import Donate from "./routes/Donate";
import Galleries from "./routes/Galleries";
import AnimalPortraits from "./routes/galleries/AnimalPortraits";
import Doodles from "./routes/galleries/Doodles";
import Photography from "./routes/galleries/Photography";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="donate" element={<Donate />} />
            <Route path="galleries">
              <Route index element={<Galleries />} />
              <Route path="animal-portraits" element={<AnimalPortraits />} />
              <Route path="doodles" element={<Doodles />} />
              <Route path="photography" element={<Photography />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

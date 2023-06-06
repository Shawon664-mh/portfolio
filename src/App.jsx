import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" text-slate-400 relative z-0 bg-slate-900">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-[100vh] border-b border-slate-700">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;

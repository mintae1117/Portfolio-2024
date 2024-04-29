import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed'>
          <Experience />
          <Tech />
        </div>
        <Works />
        <Feedbacks />
        <div className='relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed bg-blend-darken bg-black bg-opacity-80'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

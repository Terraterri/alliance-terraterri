import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Lazy-loaded components
const Home = React.lazy(() => import("./pages/Home"));
const AirPropex = React.lazy(() => import("./pages/AirPropex"));
const AirPropxSub = React.lazy(() => import("./pages/AirPropxSub"));
const Solutions = React.lazy(() => import("./pages/Solutions"));
const WhyExhibt = React.lazy(() => import("./pages/WhyExhibit"));
const WhyVisit = React.lazy(() => import("./pages/WhyVisit"));
const HostBrandExpo = React.lazy(() => import("./pages/HostBrandExpo"));
const CostomisedExpo = React.lazy(() => import("./pages/CostomisedExpo"));
const Phygiverse = React.lazy(() => import("./pages/Phygiverse"));
const Registration = React.lazy(() => import("./pages/Registration"));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <>

          <Suspense fallback={<Loader />}>
            <Header />
            <Routes>
              <Route path="/" element={<AirPropex />} />
              {/* <Route path="/home/:expoId/:unqCode" element={<Home />} /> */}
              <Route path="/airPropxSub" element={<AirPropxSub />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/whyexhibit" element={<WhyExhibt />} />
              <Route path="/whyVisit" element={<WhyVisit />} />
              <Route path="/hostbrandexpo" element={<HostBrandExpo />} />
              <Route path="/costomisedExpo" element={<CostomisedExpo />} />
              <Route path="/phygiverse" element={<Phygiverse />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/registration/:expoCode" element={<Registration />} />
            </Routes>
            <Footer />
          </Suspense>

        </>
      </Router>
    </HelmetProvider>
  );
}

export default App;

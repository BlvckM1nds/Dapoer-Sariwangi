import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Common/Header';
import Home from './pages/Home';
import Resto from './pages/Resto';
import Footer from './components/Common/Footer';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resto" element={<Resto />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;

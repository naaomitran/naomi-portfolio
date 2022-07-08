import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Snack from './Snack'
import Barr from './Barr'
import ComingSoon from './ComingSoon';

function App() {
  useEffect(() => {
    document.title = "Naomi Tran"
  }, [])

  return (

    <Router>
      <Routes>
        <Route path='/snack' element={<Snack />} exact />
        <Route path={`${process.env.PUBLIC_URL}/barrtech-mechanical`} element={<Barr />} />
        <Route path={`${process.env.PUBLIC_URL}/coming-soon`} element={<ComingSoon />} />
        <Route path={`${process.env.PUBLIC_URL}/coming-soon`} element={<ComingSoon />} />

        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>} exact />
      </Routes>

    </Router>

  );
}

export default App;

import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Snack from './Snack'
import Barr from './Barr'
import Mpr from './Mpr'
import Expedia from './Expedia'
import ComingSoon from './ComingSoon';
import PersonalProjects from './PersonalProjects';


function App() {
  useEffect(() => {
    document.title = "Naomi Tran"
  }, [])

  return (

    <Router >
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/snack`} element={<Snack />} exact />
        <Route path={`${process.env.PUBLIC_URL}/barrtech-mechanical`} element={<Barr />} />
        <Route path={`${process.env.PUBLIC_URL}/mountain-park-resort`} element={<Mpr />} />
        <Route path={`${process.env.PUBLIC_URL}/coming-soon`} element={<ComingSoon />} />
        <Route path={`${process.env.PUBLIC_URL}/expedia-redesign`} element={<Expedia />} />
        <Route path={`${process.env.PUBLIC_URL}/personal-projects`} element={<PersonalProjects />} />

        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>} exact />
      </Routes>

    </Router>

  );
}

export default App;

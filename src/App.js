import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'
import Snack from './Snack'
import Barr from './Barr'
import ComingSoon from './ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/snack`} element={<Snack />} />
        <Route path={`${process.env.PUBLIC_URL}/barrtech-mechanical`} element={<Barr />} />
        <Route path={`${process.env.PUBLIC_URL}/coming-soon`} element={<ComingSoon />} />
        <Route path={`${process.env.PUBLIC_URL}/coming-soon`} element={<ComingSoon />} />

        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>} exact />
      </Routes>

    </Router>
  );
}

export default App;

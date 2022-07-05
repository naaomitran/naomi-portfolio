import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'
import Snack from './Snack'
import Barr from './Barr'
import ComingSoon from './ComingSoon';

function App() {
  return (
    // <HashRouter basename="/subdirectory"> 

    // <Router>
    //   <Switch>
    //     <Route {`${process.env.PUBLIC_URL}/about`} component={About} />
    //     <Route path={`${process.env.PUBLIC_URL}/projects`} component={Project} />
    //     <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
    //     <Route path={`${process.env.PUBLIC_URL}/resume`}>
    //       <Document file={Resume}>
    //       <Page />
    //       </Document>
    //     </Route>
    //     <Route exact path={`${process.env.PUBLIC_URL}/`} component={HP} />

    //   </Switch>

    // </Router>

    // </HashRouter>

    // <HashRouter basename="/subdirectory"> 
    <Router>
      <Routes>
        {/* <Route path={`${process.env.PUBLIC_URL}/snack`} component={Snack} />
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} /> */}
        <Route path="/snack" element={<Snack />} />
        <Route path="/barrtech-mechanical" element={<Barr />} />
        <Route path="/personal-projects" element={<Barr />} />
        <Route path="/coming-soon" element={<ComingSoon />} />


        <Route path="/" element={<Home/>} exact />
      </Routes>

    </Router>
    // </HashRouter>
  );
}

export default App;

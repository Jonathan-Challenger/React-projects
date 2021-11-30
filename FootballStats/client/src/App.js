import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TeamCont from "./components/teamCont/TeamCont";
import StandingCont from "./components/standings/StandingCont";
import ScorersCont from "./components/scorers/ScorersCont";
import Landing from "./components/Landing";
import TeamDetail from "./components/teamItem/TeamDetail";
import ScorerDetail from "./components/scorer_detail/ScorerDetail";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/teams' element={<TeamCont />} />
            <Route path='/teams/:id' element={<TeamDetail />} />
            <Route path='/standings' element={<StandingCont />} />
            <Route path='/top-scorers' element={<ScorersCont />} />
            <Route path='/top-scorers/:id' element={<ScorerDetail />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </>
      </Router>
    </Provider>
  );
};

export default App;

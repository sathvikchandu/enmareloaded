import './App.css';
import StartPage from './components/Start page/StartPage';
import Clientlogin from './components/Login/Clientlogin';
import Developerlogin from './components/Login/Developerlogin';
import Manager from './components/Login/Manager';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Whoru from './components/Start page/Whoru';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage/>}/>
          <Route path="whoru" element={<Whoru/>}/>
          <Route path="clientlogin" element={<Clientlogin/>}/>
          <Route path="devlogin" element={<Developerlogin/>}/>
          <Route path="managerlogin" element={<Manager/>}/>
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;

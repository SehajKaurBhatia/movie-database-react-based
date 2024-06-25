import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
import App from './App.jsx'
import Details from './details.jsx'

export default function AppWrapper() {
    return(
      <Router>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/details" element={<Details/>}/>
        </Routes>
      </Router>
    );
  }

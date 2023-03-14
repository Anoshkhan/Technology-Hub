import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return( 
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;

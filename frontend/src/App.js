
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/Signup';
import LogInPage from './pages/Login';

function App() {
  return (
    <Router >
      <div className='pages'>
      <Routes>     
        <Route path='/' caseSensitive={false} element={<Home />} />
        <Route path='/signin' caseSensitive={false} element={<SignInPage />} />
        <Route path='/login' caseSensitive={false} element={<LogInPage/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
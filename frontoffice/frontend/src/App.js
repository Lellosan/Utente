
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/Signup';
import LogInPage from './pages/Login';
import Test from './pages/test';
import StorePage from './pages/store';
import PresenzaPage from './pages/presenza';
import OnlinePage from './pages/online';
import CommunityPage from './pages/community';
import Prodotti from './pages/prodotti';
import UserProfile from './pages/userProfile';

function App() { 
  return (
    <Router >
      <div className='pages'>
      <Routes>     
        <Route path='/' caseSensitive={false} element={<Home />} />
        <Route path='/signin' caseSensitive={false} element={<SignInPage />} />
        <Route path='/login' caseSensitive={false} element={<LogInPage/>} />
        <Route path='/test' caseSensitive={false} element={<Test/>} />
        <Route path='/store' caseSensitive={false} element={<StorePage />} />
        <Route path='/store/prodotti' caseSensitive={false} element={<Prodotti />} />
        <Route path='/presenza' caseSensitive={false} element={<PresenzaPage />} />
        <Route path='/online' caseSensitive={false} element={<OnlinePage />} />
        <Route path='/community' caseSensitive={false} element={<CommunityPage />} />
        <Route path='/userprofile' caseSensitive={false} element={<UserProfile />} />

      </Routes>

      </div>
    </Router>
  );
}

export default App;
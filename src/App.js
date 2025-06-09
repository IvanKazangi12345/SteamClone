import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserAccPage } from './pages/userAccountPage';
import { CreatedPage } from './pages/accountCreatedPage';
import { Achievements } from './pages/Achievements';
import { RelevantNewsApp } from './pages/relevantNewsPage';
import { Support } from './pages/SupportPage';
import { Wishlist } from './pages/WishlistPage';
import { Cart } from './pages/CartPage';
import { Main } from './pages/MainPage';
import { Login } from './pages/loginPage';
import { FavoriteGame } from './pages/FavoriteGamePage';
import { CreateAccPage } from './pages/createAccPage';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Navigate to='/main'/>} />
        <Route path='/news' element={<RelevantNewsApp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<CreateAccPage />} />
        <Route path='/access' element={<CreatedPage />} />
        <Route path='/main' element={<Main />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/support' element={<Support />} />
        <Route path='/profile' element={<UserAccPage />} />
        <Route path='/favorite' element={<FavoriteGame />} />
      </Routes>
    </Router>
  );
}

export default App;

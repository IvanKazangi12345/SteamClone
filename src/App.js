import './App.css';
import { Main } from './Components/Main';
import { Achievements } from './Components/Achievements';
import { Support } from './Components/Support';
import { Cart } from './Components/Cart';
import { FavoriteGame } from './Components/FavoriteGame';
import { Wishlist } from './Components/Wishlist';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="main" element={<Main />}></Route>
        <Route path="achievements" element={<Achievements />}></Route>
        <Route path="favorite" element={<FavoriteGame />}></Route>
        <Route path='support' element={<Support />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='wishlist' element={<Wishlist />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

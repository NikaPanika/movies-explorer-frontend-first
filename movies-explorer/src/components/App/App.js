import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import Movies from '../Movies/Movies';

function App() {
  //const [currentUser, setCurrentUser] = useState({});
  const [isLogged, setIsLogged] = useState(true);
  //const { pathname } = useLocation();
  //const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="App">
      <Header isLogged={isLogged} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies isSaved={false}/>} />
        {/*  <Route path="/saved-movies" element={<SavedMovies />} />}
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} /> */}
      </Routes>
      <Footer />
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup} />
    </div >
  );
}

export default App;

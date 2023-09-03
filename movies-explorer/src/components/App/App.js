import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  //const [currentUser, setCurrentUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [isHiddenHeader, setIsHiddenHeader] = useState(true);
  const [isHiddenFooter, setIsHiddenFooter] = useState(true);
  //const { pathname } = useLocation();
  //const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [ serverError, setServerError ] = useState('');

  function closePopup() {
    setIsPopupOpen(false);
  }

  function handlePopupOpen() {
    setIsPopupOpen(true);
  }

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === '/movies' || currentPath === '/saved-movies' || currentPath === '/profile') {
      setIsLogged(true);
    }
    else {
      setIsLogged(false);
    }

    if(currentPath === '/profile' || currentPath === '/signup' || currentPath === '/signin'){
      setIsHiddenFooter(false);
    }

    if(currentPath === '/signup' || currentPath === '/signin'){
      setIsHiddenHeader(false);
    }

  }, []);

  return (
    <div className="App">
      {isHiddenHeader && <Header isLogged={isLogged} onBurgerClick={handlePopupOpen} />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies isSaved={false} />} />
        <Route path="/saved-movies" element={<Movies isSaved={true}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register serverError={serverError}/>} />
        <Route path="/signin" element={<Login />} />
      </Routes>
      { isHiddenFooter && <Footer />}
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup} />
    </div >
  );
}

export default App;

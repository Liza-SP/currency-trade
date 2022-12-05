import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ArchivePage from './components/ArchivePage';
import NavBar from './components/NavBar';
import NoPage from './components/NoPage';
import TradingPage from './components/TradingPage';
import { setRequests } from './redux/reducers/requestsReducer';

function App() {
  const dispatch = useDispatch();
  // при перезагрузки страницы достаем данные из хранилища (в пределах одной вкладки)
  useEffect(() => {
    // запрос к sessionStorage
    const requests = JSON.parse(sessionStorage.getItem('requests')) || [];
    // сохраняем данные о заявках в редакс
    dispatch(setRequests(requests));
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TradingPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;

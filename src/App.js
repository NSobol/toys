import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/headers/header/Header.jsx';
import Footer from './components/footers/footer/Footer.jsx';
import { Content } from './components/content/Content';
import { api } from './utils/api';
import { useScan } from './hooks/Hooks';
import { filteredProducts } from './utils/function';
// import { Route, Routes } from 'react-router-dom';

function App() {
  //установка начальных состояний
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(undefined);
  const [user, setUser] = useState({});
  const [selected, setSelected]=useState([]);

  const scanValueInApp = useScan(search);

  const getHandlerLiks = async (product, isLiks) => {
    const alteredCard = await api.getChangeLikeProduct(product._id, isLiks);
    const index = products.findIndex((e) => e._id === alteredCard._id);
    if (index !== -1) {
      setProducts((state) => [
        ...state.slice(0, index),
        alteredCard,
        ...state.slice(index + 1),
      ]);
    }
   isLiks ?
      setSelected((state) => state.filter(f => f._id !== alteredCard._id))
      :
      setSelected((state) => [alteredCard, ...state])
    console.log(product);
    console.log(isLiks);
  };

  useEffect(() => {
    //получение данных пользователя и карточек товара
    Promise.all([api.getMyUserInfo(), api.getAllProducts()]).then(
      ([userData, data]) => {
        setUser(userData);
        setProducts(filteredProducts(data.products));
      }
    );
  }, []);

  useEffect(() => {
    if (scanValueInApp === undefined) return;
    api
      .getSearchProduct(scanValueInApp)
      .then((data) => setProducts(filteredProducts(data)));
  }, [scanValueInApp]);

  return (
    <div className='App'>
      <Header setSearch={setSearch} />

      <Content
        products={products}
        user={user}
        getHandlerLiks={getHandlerLiks}
      />

      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/headers/header/Header.jsx';
import Footer from './components/footers/footer/Footer.jsx';
import { Content } from './components/content/Content';
import { api } from './utils/api';
import { useScan } from './hooks/Hooks';
import { Route, Routes } from 'react-router-dom';

function App() {
  //установка начальных состояний
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(undefined);
  const [user, setUser] = useState({});

  const filteredProducts = (products) => {
    //функция отбора наших карточек
    return products.filter(
      (e) =>
        e.author._id === '6442d2653291d790b3fcf266' ||
        e.author._id === '6442bd8d3291d790b3fce3c6'
    );
  };

  const scanValueInApp = useScan(search);

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
		  <Routes>
			  <Route></Route>
        <Content products={products} user={user} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

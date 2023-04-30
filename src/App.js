import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/headers/header/Header.jsx';
import Footer from './components/footers/footer/Footer.jsx';
import { api } from './utils/api';
import { useScan } from './hooks/Hooks';
import { filteredProducts } from './utils/function';
import { ProductsContext } from './context/productsContext';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/catalogPage/CatalogPage';
import { BasketPage } from './pages/basketPage/BasketPage';
import { FavoritesPage } from './pages/favoritesPage/FavoritesPage';
// import {MainPage} from "./pages/mainPage/MainPage"
import { OrUsPage } from './pages/orUsPage/OrUsPage';
import { ProductPage } from './pages/productPage/ProductPage';

function App() {
  //установка начальных состояний
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(undefined);
  const [user, setUser] = useState({});
  const [selected, setSelected] = useState([]);

  const scanValueInApp = useScan(search);

  const getHandlerLiks = async (product, isLiks) => {
    const alteredCard = await api.getChangeLikeProduct(product._id, isLiks);
    const index = products.findIndex((e) => e._id === alteredCard._id);
    if (index !== -1) {
      setProducts((products) => [
        ...products.slice(0, index),
        alteredCard,
        ...products.slice(index + 1),
      ]);
    }
    isLiks
      ? setSelected((products) =>
          products.filter((f) => f._id !== alteredCard._id)
        )
      : setSelected((products) => [alteredCard, ...products]);
  };

  useEffect(() => {
    //получение данных пользователя и карточек товара
    Promise.all([api.getMyUserInfo(), api.getAllProducts()]).then(
      ([userData, data]) => {
        setUser(userData);
        const filtered = filteredProducts(data.products).filter((e) =>
          e.likes.some((el) => el === userData._id)
        );
        setProducts(filtered);
        // const selected = filtered.filter((e) =>
        //   e.likes.some((el) => el === userData._id)
        // );
        // setSelected(selected);
      }
    );
  }, []);

  useEffect(() => {
    if (scanValueInApp === undefined) return;
    api
      .getSearchProduct(scanValueInApp)
      .then((data) => setProducts(filteredProducts(data)));
  }, [scanValueInApp]);

  const productsValue = {
    handlerLiks: getHandlerLiks,
    products: products,
    search,
    setSearch,
    selected,
    user,
    // onSort,
  };

  return (
    <div className='App'>
      <ProductsContext.Provider value={productsValue}>
        <Header />
        <div className='content'>
          {/* {isAuthorized ? ( */}
          <Routes>
            <Route path='/' element={<CatalogPage />} />
            <Route path='/selectes' element={<FavoritesPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/basket' element={<BasketPage />} />
            <Route path='/orus' element={<OrUsPage />} />
            <Route path='*' element={<div>NOT FOUND 404</div>} />
          </Routes>
          {/* ) : (
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/orus" element={<OrUsPage />} />
              <Route path="*" element={<div>NOT FOUND 404</div>} />
            </Routes>
          )} */}
        </div>
        <Footer />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;

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
import { ProfilePage } from './pages/profilePage/ProfilePage';
import { NotFound } from './components/notFound/NotFound';
import { ResetPassword } from './components/resetPassowrForm/ResetPassword';
import { Modal } from './components/modal/Modal';
import { Autoriz } from './components/headers/autorization/Autoriz';
import { Registr } from './components/headers/registration/Registr';
import { QuestionsAndAnswers } from './pages/questionsAndAnswers/QuestionsAndAnswers';

function App() {
  //установка начальных состояний
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState(undefined);
  const [user, setUser] = useState({});
  const [selected, setSelected] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

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

  const productRating = (reviews) => {
    if (!reviews || !reviews.length) {
      return 0;
    }
    const res = reviews.reduce((acc, el) => (acc += el.rating), 0);
    return res / reviews.length;
  };

  const getSorted = (sortId) => {
    let newProduts = [];
    switch (sortId) {
      case 'Сначала дешевле':
        newProduts = products.sort((a, b) => a.price - b.price);
        setProducts([...newProduts]);
        break;

      case 'Сначала дороже':
        newProduts = products.sort((a, b) => b.price - a.price);
        setProducts([...newProduts]);
        break;

      case 'Популярные':
        newProduts = products.sort((a, b) => b.likes.length - a.likes.length);
        setProducts([...newProduts]);
        break;

      case 'Новинки':
        newProduts = products.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setProducts([...newProduts]);
        break;

      case 'Снижена цена':
        newProduts = products.sort((a, b) => b.discount - a.discount);
        setProducts([...newProduts]);
        break;

      case 'Высокий рейтинг':
        newProduts = products.sort(
          (a, b) => productRating(b.reviews) - productRating(a.reviews)
        );
        setProducts([...newProduts]);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    //получение данных пользователя и карточек товара
    Promise.all([api.getMyUserInfo(), api.getAllProducts()]).then(
      ([userData, data]) => {
        setUser(userData);
        const filtered = filteredProducts(data.products);
        setProducts(filtered);
        const selected = filtered.filter((e) =>
          e.likes.some((el) => el === userData._id)
        );
        setSelected(selected);
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
    setCurrentPage,
    setProductPerPage,
    productPerPage,
    currentProducts,
    getSorted,
    active,
    setActive,
  };

  //   const authotRoutes = (
  //     <>

  //     </>
  //   );

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
            <Route path='/profile' element={<ProfilePage />} />
            <Route
              path='/questionsAndAnswers'
              element={<QuestionsAndAnswers />}
            />
            <Route path='*' element={<NotFound />} />

            <Route
              path='/registr'
              element={
                <Modal active={active} setActive={setActive}>
                  <Registr />
                </Modal>
              }
            />
            <Route
              path='/login'
              element={
                <Modal active={active} setActive={setActive}>
                  <Autoriz />
                </Modal>
              }
            />
            <Route
              path='/passReset'
              element={
                <Modal active={active} setActive={setActive}>
                  <ResetPassword />
                </Modal>
              }
            />
          </Routes>
          {/* ) : (
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/orus" element={<OrUsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )} */}
        </div>
        <Footer />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ComeBack } from './../../components/comeBack/ComeBack';
import { Product } from '../../components/content/product/Product';
import { useParams } from 'react-router-dom';
import { api } from '../../utils/api';
import './productpage.css';
import { ReviewsList } from '../../components/reviewsList/reviewsList';
import { ProductsContext } from '../../context/productsContext';

export const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const { setProducts, user } = useContext(ProductsContext);

  const getHandlerLiksOnProductPage = async (product, isLiks) => {
    const alteredCard = await api.getChangeLikeProduct(product._id, isLiks);
    setProduct(alteredCard);
    setProducts((products) =>
      products.map((e) => (e._id === alteredCard._id ? alteredCard : e))
    );
  };

  useEffect(() => {
    if (id) {
      api.getProductInfo(id).then((info) => setProduct(info));
    }
  }, [id]);

  const getDeleteReview = useCallback(
    async (reviewId) => {
      api
        .getDeleteReviewOfProduct(product._id, reviewId)
        .then((data) => setProduct({ ...data }))
        .catch(() => console.log('err'));
    },
    [product._id]
  );
  return (
    <div className='container'>
      <ComeBack />
      {Object.keys(product).length && (
        <div className='product__page'>
          <Product
            product={product}
            setProduct={setProduct}
            reviews={product?.reviews ?? []}
            getLiks={getHandlerLiksOnProductPage}
          />
          <ReviewsList
            productId={product._id}
            reviews={product?.reviews ?? []}
            getDeleteReview={getDeleteReview}
            user={user}
          />
        </div>
      )}
    </div>
  );
};

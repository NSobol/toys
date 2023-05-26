import React, { useCallback, useEffect, useState } from 'react';
import { ComeBack } from './../../components/comeBack/ComeBack';
import { Product } from '../../components/content/product/Product';
import { useParams } from 'react-router-dom';
import { api } from '../../utils/api';
import './productpage.css';
import { ReviewsList } from '../../components/reviewsList/reviewsList';

export const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
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
      <div className='product__page'>
        <Product
          product={product}
          setProduct={setProduct}
          reviews={product?.reviews ?? []}
        />
        <ReviewsList
          productId={product._id}
          reviews={product?.reviews ?? []}
          getDeleteReview={getDeleteReview}
        />
      </div>
    </div>
  );
};

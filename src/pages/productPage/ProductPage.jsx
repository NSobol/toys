import React, { useEffect, useState } from 'react';
import { ComeBack } from './../../components/comeBack/ComeBack';
import { Product } from '../../components/content/product/Product';
import { useParams } from 'react-router-dom';
import { api } from '../../utils/api';
import './productpage.css'

export const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      api.getProductInfo(id).then((info) => setProduct(info));
    }
  }, [id]);
	
	
  return (
    <div className='container'>
      <ComeBack />
      <div className='product__page'>
        <Product product={product} />
      </div>
    </div>
  );
};

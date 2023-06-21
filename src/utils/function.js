export const filteredProducts = (products) => {
  //функция отбора наших карточек
  const filterProducts = products.filter(
    (e) =>
      e.author._id === '6442d2653291d790b3fcf266' ||
      e.author._id === '6442bd8d3291d790b3fce3c6'
  );
  return filterProducts;
};

export const getCorrectWordEnding = (numb, field = 'товар') => {
  const tmp = numb % 10;
  if (!tmp || !numb) {
    return ` ${field}ов`;
  }
  if (tmp >= 10 && tmp <= 14) {
    return ` ${field}ов`;
  }

  if (tmp === 1) {
    return ` ${field}`;
  }
  if (tmp > 1 && tmp < 5) {
    return ` ${field}а`;
  }
  if (tmp > 5 && tmp < 9) {
    return ` ${field}ов`;
  }
  return ` ${field}ов`;
};

export const productRating = (reviews) => {
  if (!reviews || !reviews?.length) {
    return 0;
  }
  const res = reviews.reduce((acc, el) => (acc += el.rating), 0);
  return Math.floor(res / reviews.length);
};

export const getDiscountPrice = (discount, price) => {
   return (price - Math.floor((price * discount) / 100)).toFixed(0);
 };
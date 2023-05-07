export const filteredProducts = (products) => {
  //функция отбора наших карточек
  const filterProducts = products.filter(
    (e) =>
      e.author._id === '6442d2653291d790b3fcf266' ||
      e.author._id === '6442bd8d3291d790b3fce3c6'
  );
  return filterProducts;
};




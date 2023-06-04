export const isError = (data) => {
  return data.type.endsWith('rejected');
};

export const isLoading = (data) => data.type?.endsWith('pending');

export const findLiked = (product, id) => {
  return product.likes.some((e) => e === id);
};

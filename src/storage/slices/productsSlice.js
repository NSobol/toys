// initial state ----------------------------------------------------
import {
  POPULAR,
  NEWEST,
  CHEAPEST,
  SALE,
  RATE,
  EXPENSIVE,
} from './../../constants/Constants';
import { filteredProducts, productRating } from './../../utils/function';
import { api } from './../../utils/api';
import { isError, isLoading, findLiked } from './../utilsStore';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  products: [],
  loading: false,
  total: 0,
  favorites: [],
  currentProduct: {},
};
// ----------------------------------------------------

// actions
// ----------------------------------------------------
export const getProducts = createAsyncThunk(
  'products',
  async function (id, { fulfillWithValue, getState, rejectWithValue }) {
    try {
      const state = getState();
      const data = await api.getProductList();
      return fulfillWithValue({ ...data, userId: state.user.data?._id });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchChangeProductLike = createAsyncThunk(
  'products/fetchChangeProductLike',
  async function (data, arg) {
    // here will be in data -> { product: product, wasLiked: isLiked }
    console.log({ data });
    try {
      const updatedCard = await api.changeProductLike(
        data.product._id,
        data.wasLiked
      );
      return arg.fulfillWithValue({ updatedCard, wasLiked: data.wasLiked });
    } catch (error) {
      return arg.rejectWithValue(error);
    }
  }
);

export const searchProductsByQuery = createAsyncThunk(
  'products/searchProductsByQuery',
  async function (search, { fulfillWithValue, rejectWithValue }) {
    try {
      const result = await api.searchProducts(search);
      return fulfillWithValue(result);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ----------------------------------------------------

// slice // reducer
// ----------------------------------------------------

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortedProducts: (state, action) => {
      switch (action.payload) {
        case CHEAPEST:
          state.products = state.products.sort((a, b) => a.price - b.price);
          break;
        case EXPENSIVE:
          state.products = state.products.sort((a, b) => b.price - a.price);
          break;
        case POPULAR:
          state.products = state.products.sort(
            (a, b) => b.likes.length - a.likes.length
          );
          break;
        case NEWEST:
          state.products = state.products.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
          break;
        case SALE:
          state.products = state.products.sort(
            (a, b) => b.discount - a.discount
          );
          break;
        case RATE:
          state.products = state.products.sort(
            (a, b) => productRating(b.reviews) - productRating(a.reviews)
          );
          break;
        default:
          state.products = state.products.sort((a, b) => a.price - b.price);
      }
    },
  },
  extraReducers: (builder) => {
    // ПОЛУЧАЕМ СПИСОК ПРОДУКТОВ
    builder.addCase(getProducts.fulfilled, (state, action) => {
      const authorCards = filteredProducts(action.payload.products) ?? [];
      state.products = authorCards;
      state.favorites = authorCards.filter((e) =>
        findLiked(e, action.payload.userId)
      );
      state.total = action.payload.total;
    });
    // Меняем лайк на продукте (на странице продукта или на странице каталога)
    builder.addCase(fetchChangeProductLike.fulfilled, (state, action) => {
      // const { updatedCard, wasLiked } = payload;
      const updatedCard = action.payload.updatedCard;
      const wasLiked = action.payload.wasLiked;
      // ОБНОВЛЯЕМ состояние карточек(продуктов) внутри слайса Продукты
      state.products = state.products.map((e) =>
        e._id === updatedCard?._id ? updatedCard : e
      );
      // ОБНОВЛЯЕМ состояние избранных карточек(продуктов) внутри слайса Продукты
      if (wasLiked) {
        // favorites/ убавляем
        state.favorites = state.favorites.filter(
          (f) => f._id !== updatedCard._id
        );
      } else {
        // favorites/ добавляем
        state.favorites = [...state.favorites, updatedCard];
      }
    });
    builder.addCase(searchProductsByQuery.fulfilled, (state, { payload }) => {
      state.products = filteredProducts(payload);
    });

    builder.addMatcher(isError, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addMatcher(isLoading, (state) => {
      // state.loading = true;
    });
  },
});
// ----------------------------------------------------

export const { setList } = products.actions;
// export const setList = products.actions.setList;

export default products.reducer;

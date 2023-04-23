const baseData = {
  baseUrl: 'https://api.react-learning.ru',
  headers: {
    'Content-Type': 'application/json',
    authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyYmQ4ZDMyOTFkNzkwYjNmY2UzYzYiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgyMDk2NTM1LCJleHAiOjE3MTM2MzI1MzV9.fnI9mFVbrNioCqFbAEJO9ff5O7P_ubWbkht64eNY4V8',
  },
  _id: '6442bd8d3291d790b3fce3c6',
};

const resp = (res) => {
  return res.json();
};

class Api {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
  }

  /*методы для пользователя*/
  getMyUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    }).then(resp);
  }

  getAllUsersInfo() {
    return fetch(`${this.baseUrl}/users`, {
      headers: this.headers,
    }).then(resp);
  }
  /*методы для товаров*/
  getAllProducts() {
    return fetch(`${this.baseUrl}/products`, {
      method: 'GET',
      headers: this.headers,
    }).then(resp);
  }

  getSearchProduct(desiredValue) {
    return fetch(`${this.baseUrl}/products/search?query=${desiredValue}`, {
      headers: this.headers,
    }).then((e) => resp(e));
  }

  getAddLike(productId) {
    return fetch(`${this.baseUrl}/products/likes/${productId}`, {
      headers: this.headers,
      method: 'PUT',
    }).then(resp);
  }

  getDeleteLike(productId) {
    return fetch(`${this.baseUrl}/products/likes/${productId}`, {
      headers: this.headers,
      method: 'DELETE',
    }).then(resp);
  }

  getChangeLikeProduct(productId, isLiked) {
    return fetch(`${this.baseUrl}/products/likes/${productId}`, {
      headers: this.headers,
      method: isLiked ? 'DELETE' : 'PUT',
    }).then(resp);
  }
}

export const api = new Api(baseData);

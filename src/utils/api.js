const baseData = {
  baseUrl: 'https://api.react-learning.ru',
  headers: {
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyYmQ4ZDMyOTFkNzkwYjNmY2UzYzYiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgyMDk2NTM1LCJleHAiOjE3MTM2MzI1MzV9.fnI9mFVbrNioCqFbAEJO9ff5O7P_ubWbkht64eNY4V8',
    'Content-Type': 'application/json',
  },
};

const freshHeaders = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('myToken'),
    },
  };
};
const resp = (res) => {
  return res.ok ? res.json() : res.json().then((data) => Promise.reject(data));
};

class Api {
  constructor(data, freshHeaders) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
    this.freshHeaders = freshHeaders;
  }

  /*методы для пользователя*/
  getMyUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      ...this.freshHeaders(),
    }).then(resp);
  }

  getAllUsersInfo() {
    return fetch(`${this.baseUrl}/users`, {
      ...this.freshHeaders(),
    }).then(resp);
  }
  getUserInfoId(userId) {
    return fetch(`${this.baseUrl}/users/${userId}`, {
      ...this.freshHeaders(),
    }).then(resp);
  }
  getResetUserAvatar(data) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      ...this.freshHeaders(),
      body: JSON.stringify(data),
    }).then(resp);
  }

  getResetUserNameAbout(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      ...this.freshHeaders(),
      body: JSON.stringify(data),
    }).then(resp);
  }

  /*Методы регистрации/авторизации/сброса пароля*/
  getRegisteredUser(data) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      ...this.freshHeaders(),
      body: JSON.stringify(data),
    }).then(resp);
  }

  getAuthorizedUser(data) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      ...this.freshHeaders(),
      body: JSON.stringify(data),
    }).then(resp);
  }

  getResetPasswordMail(data) {
    return fetch(`${this.baseUrl}/forgot-password`, {
      method: 'POST',
      ...this.freshHeaders(),
      body: JSON.stringify(data),
    }).then(resp);
  }

  getResetPasswordToken(token, data) {
    return fetch(`${this.baseUrl}/password-reset/${token}`, {
      headers: { ...this.freshHeaders() },
      method: 'PATCH',
      body: JSON.stringify(data),
    }).then(resp);
  }

  /*методы для товаров*/
  getAllProducts() {
    return fetch(`${this.baseUrl}/products`, {
      method: 'GET',
      ...this.freshHeaders(),
    }).then(resp);
  }

  getAddProduct(data) {
    return fetch(`${this.baseUrl}/products`, {
      method: 'POST',
      ...this.freshHeaders(),
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    });
  }

  getProductInfo(id) {
    return fetch(`${this.baseUrl}/products/${id}`, {
      ...this.freshHeaders(),
    }).then(resp);
  }

  getAddReviewOfProduct(productId, data) {
    return fetch(`${this.baseUrl}/products/review/${productId}`, {
      method: 'POST',
      ...this.freshHeaders(),
      body: JSON.stringify(data),
    }).then(resp);
  }

  getDeleteReviewOfProduct(productId, reviewId) {
    return fetch(`${this.baseUrl}/products/review/${productId}/${reviewId}`, {
      method: 'DELETE',
      ...this.freshHeaders(),
    }).then(resp);
  }

  getAllReviewOfProduct(productId) {
    return fetch(`${this.baseUrl}/products/review/${productId}`, {
      method: 'GET',
      ...this.freshHeaders(),
    }).then(resp);
  }

  getAllReviewsProducts() {
    return fetch(`${this.baseUrl}/products/review/`, {
      method: 'GET',
      ...this.freshHeaders(),
    }).then(resp);
  }
  getSearchProduct(desiredValue) {
    return fetch(`${this.baseUrl}/products/search?query=${desiredValue}`, {
      ...this.freshHeaders(),
    }).then(resp);
  }

  getAddLikeOfproduct(productId) {
    return fetch(`${this.baseUrl}/products/likes/${productId}`, {
      ...this.freshHeaders(),
      method: 'PUT',
    }).then(resp);
  }

  getDeleteLikeOfProduct(productId) {
    return fetch(`${this.baseUrl}/products/likes/${productId}`, {
      ...this.freshHeaders(),
      method: 'DELETE',
    }).then(resp);
  }

  getChangeLikeProduct(productId, isLiked) {
    return fetch(`${this.baseUrl}/products/likes/${productId}`, {
      ...this.freshHeaders(),
      method: isLiked ? 'DELETE' : 'PUT',
    }).then(resp);
  }
}

export const api = new Api(baseData, freshHeaders);

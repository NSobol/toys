// import { PopapAddCartProduct } from './../components/popapAddCartProduct/PopapAddCartProduct.jsx';
// export const getAddProduct = () => {
//   const createCardForm = PopapAddCartProduct();
//   content.insertAdjacentHTML('afterbegin', createCardForm);
//   const modal = document.querySelector('.create-edit-modal-form');
//   modal.classList.add('active');

//   return;
// };

// export const getModalBtnClose = (modal) => {
//   return modal.remove();
// };

// const getModalBtnOk = (modal) => {
//   const forms = document.forms[0];
//   const formData = new FormData(forms);
//   const productObj = Object.fromEntries(formData);
//   const product = { ...productObj };
//   const available = product.available
//     ? (product.available = true)
//     : (product.available = false);

//   modal.classList.toggle('active'); //делаем модалку неактивной
//   forms.reset(); //очистка полей формы
//   modal.remove(); //удаляем форму из дом-дерева
//   return;
// };

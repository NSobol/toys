import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ProductsContext } from '../../context/productsContext';
// import { api } from '../../utils/api';

export const ResetPassword = () => {
	 const { setActive } = useContext(ProductsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //  api.getRegisteredUser(data);
  };

  return (
    <div className='formContainer'>
      <h2 className='formTitle'>Восстановление пароля</h2>
      <p className='formSubTitle'>
        Для получения временного пароля необходимо ввести email, указанный при
        регистрации.
      </p>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label> Ваш email: </label> <br />
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          required
          {...register('email', { required: true })}
        />
        {errors.email && (
          <span style={{ color: 'red' }}>*Email* is mandatory </span>
        )}
        <br />
        <input
          type='submit'
          onClick={() => {
            setActive(false);
          }}
        />
      </form>
    </div>
  );
};

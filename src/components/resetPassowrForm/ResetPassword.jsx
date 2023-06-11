import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import s from "./resetPass.module.css";
// import { api } from '../../utils/api';

export const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
  };

  return (
    <div className={s.formContainer}>
      <h2 className={s.formTitle}>Восстановление пароля</h2>
      <p className={s.formSubTitle}>
        Для получения временного пароля необходимо <br /> ввести email,
        указанный при регистрации.
      </p>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.fieldFormDiv}>
          <label> Ваш email: </label> <br />
          <input
            className={s.formFieldInput}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>*Email* is mandatory </span>
          )}
        </div>

        <input
          className={s.formBtn}
          type="submit"
        />
      </form>
      <div className={s.relocationPassword}>
        <span>Вспомнил пароль?</span> <Link to={"/login"}>Войти</Link>
      </div>
    </div>
  );
};

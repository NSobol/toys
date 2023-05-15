import React from "react";

export const ResetPassword = () => {
  return (
      <div className="formContainer">
        <h2 className="formTitle">Восстановление пароля</h2>
        <p className="formSubTitle">Для получения временного пароля необходимо ввести email, указанный при регистрации.</p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label> Ваш email: </label> <br />
        <input
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
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

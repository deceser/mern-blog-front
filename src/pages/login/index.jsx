import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "../../redux/slices/user/login";
import { getMe } from "../../redux/slices/user/auth";

import InputUi from "../../components/ui/input";
import ButtonDefault from "../../components/ui/buttonDefault";
import ButtonSecondary from "../../components/ui/buttonSecondary";

import style from "./index.module.scss";

const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (value) => {
    await dispatch(loginUser(value));
    await dispatch(getMe());
  };

  return (
    <section className={style.login__page}>
      <form className={style.login__form} onSubmit={handleSubmit(onSubmit)}>
        <InputUi
          id="Username"
          label="Username"
          htmlFor="Username"
          register={{
            ...register("username", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Oops! Username or Password is incorrect",
              },
              maxLength: {
                value: 12,
                message: "Oops! Username or Password is incorrect",
              },
            }),
          }}
          error={errors?.username && <>{errors?.username?.message}</>}
        />
        <InputUi
          id="Password"
          label="Password"
          htmlFor="Password"
          register={{
            ...register("password", {
              required: "This field is required",
              minLength: {
                value: true,
                message: "Oops! Username or Password is incorrect",
              },
            }),
          }}
          error={errors?.password && <>{errors?.password?.message}</>}
        />
        <div className={style.btn__form}>
          <NavLink to="/registration">
            <ButtonSecondary>Registration</ButtonSecondary>
          </NavLink>
          <ButtonDefault type="submit">Log In</ButtonDefault>
        </div>
      </form>
    </section>
  );
};

export default Login;

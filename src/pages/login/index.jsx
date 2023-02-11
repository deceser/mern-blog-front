import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import { loginUser } from "../../redux/slices/user/login";
import { getMe } from "../../redux/slices/user/auth";

import InputUi from "../../components/ui/input";
import ButtonDefault from "../../components/ui/buttonDefault";
import ButtonSecondary from "../../components/ui/buttonSecondary";

import style from "./index.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  React.useEffect(() => {
    if (error) {
      toast.error("Oops! Username or Password is incorrect", {
        position: "top-center",
      });
    }
  }, [error]);

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
                message: "Oops! Min 3 characters",
              },
              maxLength: {
                value: 12,
                message: "Oops! Max 12 characters",
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
                value: 3,
                message: "Oops! Min 3 characters",
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

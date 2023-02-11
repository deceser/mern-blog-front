import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { registrationUser } from "../../redux/slices/user/registration";

import InputUi from "../../components/ui/input";
import ButtonSecondary from "../../components/ui/buttonSecondary";

import style from "./index.module.scss";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (value) => {
    dispatch(registrationUser(value));
    navigate("/login");
  };

  return (
    <section className={style.register__page}>
      <form className={style.register__form} onSubmit={handleSubmit(onSubmit)}>
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
          id="Email"
          label="Email"
          htmlFor="Email"
          register={{
            ...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }),
          }}
          error={errors?.email && <>{errors?.email?.message}</>}
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
                message: "Oops! Min 3 csharacters",
              },
              maxLength: {
                value: 12,
                message: "Oops! Max 12 characters",
              },
            }),
          }}
          error={errors?.password && <>{errors?.password?.message}</>}
        />
        <ButtonSecondary type="submit">Registration</ButtonSecondary>
      </form>
    </section>
  );
};

export default Register;

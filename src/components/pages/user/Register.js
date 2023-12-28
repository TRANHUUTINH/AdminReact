import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "../../../asset/css/register.css";

export const RegisterForm = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().required('Vui lòng nhập email.').email('Email không hợp lệ.'),
    username: yup.string().required('Vui lòng nhập username.').matches(/^[A-Z0-9]+$/i, 'Username không hợp lệ.'),
    password: yup.string().required('Vui lòng nhập mật khẩu.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Mật khẩu không đủ mạnh.'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Mật khẩu và xác nhận mật khẩu không khớp.').required('Vui lòng xác nhận mật khẩu.'),
    agreeTerms: yup.boolean().oneOf([true], 'Vui lòng đồng ý với điều khoản.')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    // Handle form submission here
    console.log("Form data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container-register">
      <h1 className="h1-login">Đăng ký</h1>
      <input
        {...register('email')}
        className="input-register"
        type="email"
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register('username')}
        className="input-register"
        type="text"
        placeholder="Username"
      />
      {errors.username && <p>{errors.username.message}</p>}

      <input
        {...register('password')}
        className="input-register"
        type="password"
        placeholder="Password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input
        {...register('confirmPassword')}
        className="input-register"
        type="password"
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <label className="label-agree-terms">
        <input
          {...register('agreeTerms')}
          className="checkbox-register"
          type="checkbox"
        />
        <h5>Đồng ý với điều khoản</h5>
      </label>
      {errors.agreeTerms && <p>{errors.agreeTerms.message}</p>}

      <button type="submit">Đăng ký</button>
    </form>
  );
};

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "../../../asset/css/login.css"

export const LoginForm = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required("Vui lòng nhập tên người dùng.")
      .matches(/^[A-Za-z0-9]+$/, "Tên người dùng phải là chữ và số."),
    password: yup.string().required("Vui lòng nhập mật khẩu.")
      .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/, "Mật khẩu cần có ít nhất 6 ký tự, chứa ít nhất 1 chữ in hoa và 1 số.")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container-login">
      <h1 className="h1-login">Đăng nhập</h1>
      <input
        className="input-login"
        {...register("username")}
        type="text"
        placeholder="Tên người dùng"
      />
      {errors.username && <p className="error-message-login">{errors.username.message}</p>}

      <input
        className="input-login"
        {...register("password")}
        type="password"
        placeholder="Mật khẩu"
      />
      {errors.password && <p className="error-message-login">{errors.password.message}</p>}

      <button type="submit">Đăng nhập</button>
    </form>
  );
};

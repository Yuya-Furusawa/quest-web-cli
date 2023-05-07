import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import type { User } from "../libs/type";
import { AuthContext } from "../context/auth";
import Spacer from "../components/atoms/Spacer";

type LoginInput = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const context = React.useContext(AuthContext);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginInput>();
  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    const fetchedUser: User = await res.json();

    context.login(fetchedUser);
    navigate("/");
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col w-2/5">
        <Spacer size="15px" />
        <div className="text-lg font-bold">Login</div>
        <Spacer size="30px" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label>Email</label>
            <Spacer size="5px" />
            <input
              className="border border-gray-300 rounded"
              {...register("email", { required: true })}
            />
          </div>
          <Spacer size="20px" />
          <div className="flex flex-col">
            <label>Password</label>
            <Spacer size="5px" />
            <input
              className="border border-gray-300 rounded"
              {...register("password", { required: true })}
            />
          </div>
          <Spacer size="30px" />
          <button type="submit" className="p-2 bg-sky-600 text-white rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

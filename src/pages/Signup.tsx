import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import type { User } from "../libs/type";
import { AuthContext } from "../context/auth";
import Spacer from "../components/Spacer";

type SignupInput = {
  username: string;
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const context = React.useContext(AuthContext);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<SignupInput>();
  const onSubmit: SubmitHandler<SignupInput> = async (data) => {
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const RegisterUser: User = await res.json();

    context.login(RegisterUser);
    navigate("/");
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col w-2/5">
        <Spacer size="15px" />
        <div className="text-lg font-bold">SignUp</div>
        <Spacer size="30px" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label>Username</label>
            <Spacer size="5px" />
            <input
              className="border border-gray-300 rounded"
              {...register("username", { required: true })}
            />
          </div>
          <Spacer size="20px" />
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
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

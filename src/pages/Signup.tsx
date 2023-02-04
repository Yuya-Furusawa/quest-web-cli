import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Spacer from "../components/Spacer";

type SignupInput = {
  username: string;
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const { register, handleSubmit } = useForm<SignupInput>();
  const onSubmit: SubmitHandler<SignupInput> = (data) => console.log(data);

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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import { useForm } from "react-hook-form";
import { FormError } from "../components/errors/FormError";
import { gql, useMutation } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      ok
      id
      token
      error
    }
  }
`;

interface ILoginForm {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();
  const [login, { loading, data, error }] = useMutation(LOGIN_MUTATION);
  const onValid = () => {
    const { email, password } = getValues();
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg py-10 rounded-lg text-center">
        <h3 className="text-2xl text-gray-800">Log in</h3>
        <form
          onSubmit={handleSubmit(onValid)}
          action=""
          className="grid gap-3 mt-5 px-5"
        >
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            name="email"
            id=""
            placeholder="email"
            required
            className="input mb-3 "
          />
          {errors.email?.message && (
            <FormError errorMessage={errors.email.message} />
          )}
          <input
            {...register("password", {
              required: "Password is required",
              minLength: 6,
            })}
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
            className="input"
          />
          {errors.password?.message && (
            <FormError errorMessage={errors.password.message} />
          )}
          {errors.password?.type === "minLength" && (
            <FormError errorMessage="Password must be more than 6 chars." />
          )}
          <button className="mt-3 btn">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface LoginFormValues {
  username: string;
  password: string;
  email: string;
  status: string;
}

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = (data: LoginFormValues) => {
    // Log the data to the console
    console.log(data);

    // Optionally, you can redirect to another page
    // router.push("/dashboard");
  };

  return (
    <div>
      <div>
        <h1>user </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <input
              id="status"
              type="text"
              {...register("status", { required: "Status is required" })}
            />
            {errors.status && <p>{errors.status.message}</p>}
          </div>
          {loginError && <p>{loginError}</p>}
          <button type="submit">
          +add 
          </button>
        </form>
      </div>
    </div>
  );
}

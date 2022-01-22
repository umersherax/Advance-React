import React from "react";
import useFrom from "../../custom-hooks/useForm";
import useApis from "../../custom-hooks/useApis";

export default function Login() {
  const [values, handleInput] = useFrom();
  const [submit, error] = useApis(values);
  return (
    <div>
      <h1>Login</h1>
      <input
        type={"text"}
        placeholder="Email"
        name="email"
        onChange={handleInput}
        value={values.email}
      />
      <br/>
      <input
        type={"password"}
        placeholder="Password"
        name="password"
        onChange={handleInput}
        value={values.password}
      />
      <p>{error && 'Form cannot be empty'}</p>
      <button onClick={submit}>Click</button>
    </div>
  );
}

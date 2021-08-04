import { useState } from "react";
import Link from "next/link";

import { FormInput } from "./FormInput";

export const SignUpForm = ({ loading, error, onSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSignUp({
      variables: {
        name,
        email,
        password,
      },
    });
  };
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <FormInput label="name" value={name} onChange={setName} />
      </div>
      <div className="mb-6">
        <FormInput label="email" value={email} onChange={setEmail} />
      </div>
      <div className="mb-6">
        <FormInput
          label="password"
          value={password}
          type="password"
          onChange={setPassword}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={loading}
        >
          Sign up
        </button>
        <Link href={`/login`}>Log in</Link>
      </div>
      {error && <p>An erorr has ocurred</p>}
    </form>
  );
};

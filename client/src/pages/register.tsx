import React, { useState } from 'react';
import Link from 'next/link';
import InputBox from '../components/InputBox';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen p-6">
        <div className="w-10/12 mx-auto md:w-96">
          <h1 className="mb-2 text-lg font-bold text-center">SignUp</h1>
          <form>
            <InputBox
              placeholder="Email"
              value={email}
              setValue={setEmail}
              error={errors.email}
            />
            <InputBox
              placeholder="UserName"
              value={username}
              setValue={setUsername}
              error={errors.username}
            />
            <InputBox
              placeholder="Password"
              value={password}
              setValue={setPassword}
              error={errors.password}
            />
            <button className="w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-blue-400 border rounded">
              Sign Up
            </button>
          </form>
          <small>
            Already SignUp ?
            <Link href="/login">
              <span className="ml-3 text-blue-500 uppercase">LogIn</span>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Register;

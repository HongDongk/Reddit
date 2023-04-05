import React, { FormEvent, useState } from 'react';
import InputBox from '../components/InputBox';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuthDispatch } from '@/context/auth';

const Login = () => {
  let router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const dispatch = useAuthDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/auth/login',
        { username, password },
        { withCredentials: true }, //로그인시 쿠키에 토큰발급허용
      );
      dispatch('LOGIN', response.data?.user);
      router.push('/');
    } catch (error: any) {
      setErrors(error.response?.data || {});
    }
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen p-6">
        <div className="w-10/12 mx-auto md:w-96">
          <h1 className="mb-2 text-lg font-bold text-center">Log In</h1>
          <form onSubmit={handleSubmit}>
            <InputBox
              placeholder="Username"
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
              Log In
            </button>
          </form>
          <small>
            No Id?
            <Link href="/register">
              <span className="ml-3 text-blue-500 uppercase">Sign Up</span>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;

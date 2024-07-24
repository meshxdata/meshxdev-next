import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <form>
      <div className="flex gap-4 justify-between mt-5 w-full">
        <h2 className="justify-center py-2 text-xl leading-6 whitespace-nowrap text-black text-opacity-90">
          Login
        </h2>
        <button className="flex gap-2 px-3 py-1.5 text-sm leading-5 text-blue-600 rounded">
          <span>Sign up</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd45a9576d4d3f72e969f1c43afb9ef7e3da6e7283e4dddf5cf9832f9d1ff768?apiKey=ccbd9f716d3746849ccb6bd0200e2166&" className="shrink-0 my-auto w-4 aspect-square" alt="" />
        </button>
      </div>
      <div className="mt-5">
        <label htmlFor="email" className="text-sm leading-5 text-black text-opacity-70">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="justify-center p-3 mt-1 w-full text-sm leading-5 bg-white rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-40"
          placeholder="Enter email..."
        />
      </div>
      <div className="mt-5">
        <label htmlFor="password" className="text-sm leading-5 text-black text-opacity-70">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="justify-center p-3 mt-1 w-full text-sm leading-5 bg-white rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-40"
          placeholder="Enter password..."
        />
      </div>
      <button className="justify-center items-center p-3 mt-5 w-full text-sm leading-5 whitespace-nowrap bg-orange-600 rounded text-white text-opacity-90 max-md:px-5">
        Continue
      </button>
      <div className="flex gap-5 justify-between py-1.5 mt-5 w-full text-sm leading-5 text-black text-opacity-60">
        <label className="flex gap-2">
          <input type="checkbox" className="sr-only" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/56b74c7a8e1b568ae6ba5d4ebaef417eae070ffc26c58265501fb99d932db2cb?apiKey=ccbd9f716d3746849ccb6bd0200e2166&" className="shrink-0 my-auto w-4 aspect-square" alt="" />
          <span>Remember me</span>
        </label>
        <a href="#recover" className="text-black text-opacity-60">Recover password</a>
      </div>
    </form>
  );
};

export default LoginForm;

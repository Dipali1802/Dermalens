import React, { useState } from 'react';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
       console.log('Forgot password submitted for email:', email);
  };

  return (
    <div className="max-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8 p-8 bg-blue-900 rounded-lg shadow-lg ">
        
        <div>
          <h2 className="mt-6 text-center text-3xl  font-extrabold text-white ">Forgot Password</h2>
        </div>
        <label htmlFor="remember-me" className=" mt-2 block font-semibold text-white text-center">
              Change password
              </label>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-lg shadow-sm -space-y-px">
            <div>
              <label htmlFor="new-password" className="sr-only">New Password</label>
              <input
                id="New Password"
                name="Enter new password"
                type="password"
                autoComplete="new password"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm   "
                placeholder="Enter your new password"
              />
            </div>
            
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="new-password" className="sr-only">New Password</label>
              <input
                id="New Password"
                name="Enter new password"
                type="password"
                autoComplete="new password"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm your new password"
              />
            </div>
            
          </div>
          <div>
            
            <button
              type="submit"
              className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;

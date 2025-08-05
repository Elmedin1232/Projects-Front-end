import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { loginUser, logoutUser } from "../store/thunks/authThunks";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading, error } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      setEmail("");
      setPassword("");
    } catch (error) {
      // Error is handled by the thunk
    }
  };

  const handleLogout = async () => {
    await dispatch(logoutUser());
  };

  return (
    <div className="bg-gray-100 py-3 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-end">
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <span className="text-green-600 font-medium">
              Welcome, {user?.name || 'User'}!
            </span>
            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoading}
              className="text-red-500 hover:text-red-700 text-sm underline disabled:opacity-50"
            >
              {isLoading ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="flex items-center space-x-4">
            {error && (
              <div className="text-red-600 text-sm bg-red-100 px-3 py-1 rounded">
                {error}
              </div>
            )}
            <div className="flex items-center space-x-2">
              <label htmlFor="email" className="text-sm text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="demo@example.com"
                required
                disabled={isLoading}
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="password" className="text-sm text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="password"
                required
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white px-4 py-1 rounded-md text-sm font-medium transition-colors duration-300"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        )}
       </div>
     </div>
   );
};

export default Login; 
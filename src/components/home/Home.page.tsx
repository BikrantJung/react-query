import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  const className =
    "bg-white transition p-2 hover:bg-gray-600 hover:text-white";
  return (
    <div>
      <nav className="bg-gray-800 text-gray-900 p-3">
        <ul className="flex gap-2 items-center">
          <li className={className}>
            <Link to="/">Home</Link>
          </li>
          <li className={className}>
            <Link to="/traditional-fetch">Traditional Fetch</Link>
          </li>
          <li className={className}>
            <Link to="/react-query-fetch">React Query Fetch</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1 className="text-4xl text-center font-serif">
          Welcome to React Query Class
        </h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;

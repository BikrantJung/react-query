import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/traditional-fetch">Traditional Fetch</Link>
          </li>
          <li>
            <Link to="/react-query-fetch">React Query Fetch</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Welcome to React Query Class</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;

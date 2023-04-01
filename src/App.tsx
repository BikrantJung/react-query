import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home.page";
import TraditionalPage from "./components/traditional/Traditional.page";
import ReactQuery from "./components/react-query-fetch/ReactQuery.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/traditional-fetch",
        element: <TraditionalPage />,
      },
      {
        path: "/react-query-fetch",
        element: <ReactQuery />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <div className="App"></div>;
}

export default App;

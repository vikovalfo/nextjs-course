import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts, { loader as fetchPostsLoader } from "./pages/Posts";
import "./index.css";
import NewPost, { action as submitPostAction } from "./pages/NewPost";
import RootLayout from "./pages/RootLayout";
import PostDetails, { loader as postDetailsLoader} from "./pages/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: fetchPostsLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: submitPostAction,
          },
          {
            path: '/edit-post/:id',
            element: <PostDetails />,
            loader: postDetailsLoader
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

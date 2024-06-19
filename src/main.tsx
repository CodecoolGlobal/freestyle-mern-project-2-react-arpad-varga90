import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./UserProvider";

import "./index.css";
import AuthOnly from "./components/AuthOnly.tsx";
import GuestOnly from "./components/GuestOnly.tsx";
import LoginPage from "./Pages/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <AuthOnly>
          <>
            <h1>Hello</h1>
          </>
        </AuthOnly>
        <GuestOnly>
          <LoginPage />
        </GuestOnly>
      </>
    ),
  },
  {
    path: "login",
    element: (
      <GuestOnly>
        <LoginPage />
      </GuestOnly>
    ),
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </UserProvider>
  </React.StrictMode>
);

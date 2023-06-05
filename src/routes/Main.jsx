import React, { lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../components/home/Home"));
const Body = lazy(() => import("../components/body/Body"));
const LogIn = lazy(() => import("../login/LogIn"));
const SignUp = lazy(() => import("../login/SignUp"));
const NotFoundPage = lazy(() => import("../shared/notFoundPage/NotFoundPage"));
const ViewRecipe = lazy(() => import("../components/viewRecipe/ViewRecipe"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const Blog = lazy(() => import("../components/blog/Blog"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner animation="border" variant="danger" />}>
        <Home />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinner animation="border" variant="danger" />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Spinner animation="border" variant="danger" />}>
            <LogIn />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Spinner animation="border" variant="danger" />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "recipe",
        element: (
          <Suspense fallback={<Spinner animation="border" variant="danger" />}>
            <PrivateRoute>
              <ViewRecipe />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<Spinner animation="border" variant="danger" />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Spinner animation="border" variant="danger" />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import NotFound from "./pages/NotFound.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { DashboardContextProvider } from "./contexts/dashboardContext.jsx";
import { ErrorContextProvider } from "./contexts/errorContext.jsx";
import { UserDataContextProvider } from "./contexts/userDataContext.jsx";
import App from "./App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* dashboard path to be changed to 
      <Route path="/dashboard/:userId" element={<Dashboard />} />
      */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserDataContextProvider>
      <DashboardContextProvider>
        <ErrorContextProvider>
          <RouterProvider router={router} />
        </ErrorContextProvider>
      </DashboardContextProvider>
    </UserDataContextProvider>
  </React.StrictMode>
);

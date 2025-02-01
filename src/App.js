import "./App.css";
import React from "react";
import { Layout } from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authRoutes } from "./routes/auth-routes";
import { nonAuthRoutes } from "./routes/non-auth-routes";
import { AuthCheck } from "./components/middleware/AuthCheck";
import { InitialRenderPage } from "./pages/InitialRenderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {authRoutes?.map((route, index) => (
          <Route
            path={route?.path}
            element={
              <AuthCheck>
                <Layout>{route?.component}</Layout>
              </AuthCheck>
            }
            key={index}
          />
        ))}

        {nonAuthRoutes?.map((route, index) => (
          <Route
            path={route?.path}
            element={<>{route?.component}</>}
            key={index}
          />
        ))}
        <Route path="/" element={<InitialRenderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

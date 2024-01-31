import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import AppLayout from "../Components/AppLayout";
import PageNotFound from "../Components/PageNotFound";
import Login from "../Components/Login";
import { useState } from "react";

function AppRouter() {
  const [user, setUser] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={user ? <Navigate to={"/home"} /> : <Login />}
        />
        <Route
          path="/home"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <AppLayout>
              <Profile />
            </AppLayout>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

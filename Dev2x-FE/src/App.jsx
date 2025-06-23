// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import Feed from "./components/Feed";
import ProtectedRoute from "./components/ProtectedRoute";
import { isLoggedIn } from "./utils/auth";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>

          {/* ✅ Public login route */}
          <Route path="/login" element={<Login />} />

          {/* ✅ Protected section */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Body />
              </ProtectedRoute>
            }
          >
            <Route index element={<Feed />} /> {/* Feed is default at "/" */}
            <Route path="profile" element={<Profile />} />
            <Route path="connections" element={<Connections />} />
            <Route path="requests" element={<Requests />} />
          </Route>

          {/* ✅ Catch-all: redirect unknown route to "/" or login */}
          <Route
            path="*"
            element={<Navigate to={isLoggedIn() ? "/" : "/login"} replace />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

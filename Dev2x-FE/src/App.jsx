import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import Feed from "./components/Feed"; // Will now be shown at "/"
import ProtectedRoute from "./components/ProtectedRoute";
import { isLoggedIn } from "./utils/auth";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>

          {/* Redirect root "/" → if logged in go to "/", else to login */}
          <Route
            path="/"
            element={<Navigate to={isLoggedIn() ? "/" : "/login"} />}
          />

          {/* Public login page */}
          <Route path="/login" element={<Login />} />

          {/* Protected area */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Body />
              </ProtectedRoute>
            }
          >
            <Route index element={<Feed />} /> {/* Feed is default */}
            <Route path="profile" element={<Profile />} />
            <Route path="connections" element={<Connections />} />
            <Route path="requests" element={<Requests />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

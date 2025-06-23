import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState(!user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true,
        });
        dispatch(addUser(res.data)); // 🟢 update redux store
      } catch (err) {
        console.error("Not authenticated:", err.message);
      } finally {
        setLoading(false);
      }
    };

    if (!user) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [user, dispatch]);

  if (loading) return null; // OR show a loader

  // If after everything user is still missing, redirect to login
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default ProtectedRoute;

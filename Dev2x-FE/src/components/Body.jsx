import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from 'axios';
import { useEffect } from "react";

const Body = () => {
  const navigate = useNavigate();

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
  
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.response && err.response.status === 401) { 
        navigate("/login");
      }
      console.error("Body.js fetchUser error:", err);
    }
  };
  
  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, [userData]); // Re-run only when `userData` changes
  

  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default Body
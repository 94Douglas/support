import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Admin Route
export const useAdminAuthStatus = () => {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if(user){
        if(user.isAdmin === true){
            setAdminLoggedIn(true);
        }
    }
    else {
        setAdminLoggedIn(false);
    }
    setCheckingStatus(false);
  }, [user]);
  return { adminLoggedIn ,checkingStatus };
};

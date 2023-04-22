import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../actions/userActions";
import Loader from '../layout/Loader'
 
const ProtectedRoute = ({ children, isAdmin, isOrganiser }) => {
  const {
    isAuthenticated = false,
    loading = true,
    role,
  } = useSelector((state) => state.auth);
 
  const dispatch = useDispatch();
 
  useEffect(() => {
    if (!role) {
      dispatch(loadUser());
    }
  }, [isAuthenticated, loading]);
 
  if (loading) return <h1><Loader/></h1>;
 
  if (!loading && isAuthenticated) {
    if (isAdmin === true  && role !== "admin") {
      return <Navigate to="/" />;
    }
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
 
export default ProtectedRoute;
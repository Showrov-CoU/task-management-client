import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Button, Spinner } from "flowbite-react";

const customTheme = {
  color: {
    primary: "text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
  },
};

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Button theme={customTheme} color="primary">
          <Spinner aria-label="Spinner button example" size="sm" />
          <span className="pl-3">Loading...</span>
        </Button>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;

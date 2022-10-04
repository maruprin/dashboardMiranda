import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../App";

function PrivateRoute(props){
  const { authState } = useContext(AuthContext);
    let location = useLocation();
    if(!authState.auth){
      return <Navigate to='/login' state={{ from: location }} replace />}
    else{
      return props.children
  }
        
}

  export default PrivateRoute;
  
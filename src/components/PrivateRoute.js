import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute(props){
    let location = useLocation();
    console.log(props.children)
    if(!props.auth)
      {return <Navigate to='/login' state={{ from: location }} replace />}
    else{
        return props.children
    }
        
}

  export default PrivateRoute;
  
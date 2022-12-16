import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";

export const PrivateRoute = ({redirectTo = '/', component: Component}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);

    return !isLoggedIn && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
}
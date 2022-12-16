import { lazy } from "react";
import { Routes, Route, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refresh } from "redux/auth/operations";
import { selectIsRefreshing } from "redux/auth/selectors";
import { SharedLayout } from "components/sharedLayout/SharedLayout";
import { Home } from "pages/Home";
import { Register } from "pages/Register";
import { LogIn } from "pages/Login";
import { PrivateRoute } from "components/PrivateRoute";
import { RestrictedRoute } from "components/RestrictedRoute";
const Contacts = lazy(() => import("pages/contacts/Contacts"));


export const App = () => {
        const dispatch = useDispatch();
        const isRefresching = useSelector(selectIsRefreshing);        

        useEffect(() => {
                dispatch(refresh())                
        }, [dispatch]);

        return !isRefresching && (                
                <Routes>                        
                        <Route path="/" exact element={<SharedLayout />} >                                
                                <Route index element={<Home />} />                                
                                <Route
                                        path="/contacts"
                                        element={                                                
                                                <PrivateRoute redirectTo="/login" component={<Contacts />} />
                                        }                                        
                                />                                
                                <Route
                                        path="/register"
                                        element={
                                                <RestrictedRoute redirectTo="/contacts" component={<Register />} />
                                        }
                                />
                                <Route
                                        path="/login"                                        
                                        element={
                                                <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
                                        }
                                />
                        </Route>
                </Routes>)
};
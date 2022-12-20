import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { Loader } from "components/loader/Loader";
import { AppBar } from "components/appBar/AppBar";
// import { Container } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return(
        <Container maxWidth="sm">
            <AppBar/>
            <Suspense fallback={<Loader/>}>
                <Outlet></Outlet>
            </Suspense>            
        </Container>
    )
}
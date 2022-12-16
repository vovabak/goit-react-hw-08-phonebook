import { Suspense } from "react";
import { Outlet } from "react-router-dom"
import { Loader } from "components/loader/Loader";
import { AppBar } from "components/appBar/AppBar";
import { Container } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return(
        <Container>
            <AppBar/>
            <Suspense fallback={<Loader/>}>
                <Outlet></Outlet>
            </Suspense>            
        </Container>
    )
}
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to={"/produtos"} />}>
                </Route>
                <Route
                    path="/produtos"
                    element={<Home />}>
                </Route>
                <Route
                    path="/cart"
                    element={<Cart />}>
                </Route>
                <Route
                    path='*'
                    element={<p>Not found</p>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp
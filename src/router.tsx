import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import LoginView from "./infrastructure/auth/LoginView";
import App from "./App";

export default function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<>Cargando...</>}>
                <Routes>
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/" element={<App />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
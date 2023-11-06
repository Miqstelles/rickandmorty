import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Personagem } from "../components/personagem";
import { Episodio } from "../components/episodio";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Personagem/:id" element={<Personagem />} />
                <Route path="/Episodio/:id" element={<Episodio />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

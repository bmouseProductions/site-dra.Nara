import { Routes, Route } from "react-router-dom";

import Home from './pages/home/home'
import Procedimentos from "./pages/procedimentos/procedimentos";

export default function RoutesAplication() {
    return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/procedimentos" element={<Procedimentos />}/>
      </Routes>
    )
}
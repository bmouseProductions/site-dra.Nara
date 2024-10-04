import { Routes, Route } from "react-router-dom";

import Home from './pages/home/home'

export default function RoutesAplication() {
    return (
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    )
}
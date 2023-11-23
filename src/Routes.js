import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Index } from './pages/Index';
import { Music } from './pages/Music';
import { Art } from './pages/Art';

export function RoutesHandle() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/music" element={<Music />} />
                <Route path="/art" element={<Art />} />
            </Routes>
        </Router>
    );
}

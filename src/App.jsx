import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Utama from "./pages/Utama";
import KataPuitis from "./pages/KataPuitis";

export default function App() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <div id="main-content" className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="utama" element={<Utama />} />
            <Route path="katapuitis" element={<KataPuitis />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

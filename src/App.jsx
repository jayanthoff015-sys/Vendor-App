import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./assets/Components/Navbar/Navbar";
import Dashboard from "./assets/Pages/Dashboard/Dashboard";
import Vendors from "./assets/Pages/Vendors/Vendors";
import Invoices from "./assets/Pages/Invoices/Invoices";
import Payments from "./assets/Pages/Payments/Payments";
// import Alerts from "./pages/Alerts";
// import Login from "./pages/Login";
import "./App.css";

export default function App() {
  const userEmail = "jayanthoff015@gmail.com"; // static for now

  const handleLogout = () => {
    alert("Logout clicked (you can add logic later)");
  };

  return (
    <div className="app-root">
      <Navbar userEmail={userEmail} onLogout={handleLogout} />

      <main className="app-main">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
}

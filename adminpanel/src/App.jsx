import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </UserProvider>
  );
}

export default App;

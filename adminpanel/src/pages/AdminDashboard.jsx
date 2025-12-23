import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Sidebar from "../components/Sidebar";
import ContactUser from "../components/ContactUser";

const AdminDashboard = () => {
  const { user, logout } = useContext(UserContext);
  const [showContacts, setShowContacts] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleConnect = (email) => {
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleOpenContactUser = () => {
    setShowContacts(true);
  };

  const handleBack = () => {
    setShowContacts(false);
  };

  if (!user) return null; // or loading spinner

  return (
    <div className="flex min-h-screen">
      <Sidebar
        user={user}
        onConnect={handleConnect}
        onLogout={handleLogout}
        onOpenContactUser={handleOpenContactUser}
      />

      {showContacts ? (
        <ContactUser onBack={handleBack} />
      ) : (
        <div className="flex-1 p-8 text-white bg-gray-900">
          <h1 className="text-3xl font-bold mb-6">
            Welcome {user ? user.name : "Admin"} to Dashboard
          </h1>
          <p>Click "Contact User" to view contact form submissions.</p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

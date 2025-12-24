import React, { useState, useEffect } from "react";

const ContactUser = ({ onBack }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://ongc-backend.vercel.app/api/contact');
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      const data = await response.json();
      setContacts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleConnect = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleApprove = async (id) => {
    try {
      const response = await fetch(`https://ongc-backend.vercel.app/api/contact/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'approved' }),
      });
      if (!response.ok) {
        throw new Error('Failed to approve');
      }
      // Update local state
      setContacts(contacts.map(c => c._id === id ? { ...c, status: 'approved' } : c));
    } catch (err) {
      alert('Error approving contact: ' + err.message);
    }
  };

  if (loading) return <p className="text-white">Loading contacts...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="flex-1 p-8 text-white bg-gray-900">
      <button
        onClick={onBack}
        className="mb-4 bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded cursor-pointer"
      >
        Back to Dashboard
      </button>
      <h1 className="text-3xl font-bold mb-6">Users Contact Details</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Pending Requests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.filter(c => c.status === 'pending').length === 0 ? (
              <p>No pending contacts.</p>
            ) : (
              contacts.filter(c => c.status === 'pending').map((contact) => (
                <div key={contact._id} className="bg-gray-800 p-4 rounded shadow-md">
                  <h2 className="text-xl font-semibold">{contact.name}</h2>
                  <p><strong>Email:</strong> {contact.email}</p>
                  {contact.title && <p><strong>Title:</strong> {contact.title}</p>}
                  <p><strong>Message:</strong> {contact.message}</p>
                  <p><strong>Status:</strong> {contact.status}</p>
                  <p><strong>Date:</strong> {new Date(contact.createdAt).toLocaleString()}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleConnect(contact.email)}
                      className="bg-green-600 hover:bg-green-700 py-1 px-3 rounded text-sm cursor-pointer"
                    >
                      Connect via Mail
                    </button>
                    <button
                      onClick={() => handleApprove(contact._id)}
                      className="bg-blue-600 hover:bg-blue-700 py-1 px-3 rounded text-sm cursor-pointer"
                    >
                      Approve
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Approved Requests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.filter(c => c.status === 'approved').length === 0 ? (
              <p>No approved contacts.</p>
            ) : (
              contacts.filter(c => c.status === 'approved').map((contact) => (
                <div key={contact._id} className="bg-gray-800 p-4 rounded shadow-md">
                  <h2 className="text-xl font-semibold">{contact.name}</h2>
                  <p><strong>Email:</strong> {contact.email}</p>
                  {contact.title && <p><strong>Title:</strong> {contact.title}</p>}
                  <p><strong>Message:</strong> {contact.message}</p>
                  <p><strong>Status:</strong> {contact.status}</p>
                  <p><strong>Date:</strong> {new Date(contact.createdAt).toLocaleString()}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleConnect(contact.email)}
                      className="bg-green-600 hover:bg-green-700 py-1 px-3 rounded text-sm cursor-pointer"
                    >
                      Connect via Mail
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUser;

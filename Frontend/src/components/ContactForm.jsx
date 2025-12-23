import React, { useState, useEffect } from "react";
import ContactImage from "../assets/contact.png";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [contactId, setContactId] = useState(localStorage.getItem('contactId'));
  const [currentStatus, setCurrentStatus] = useState(null);

  const apiBase = (import.meta.env.VITE_API_URL || "http://localhost:5000").trim();

  useEffect(() => {
    if (contactId) {
      checkStatus();
    }
  }, [contactId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Please fill name, email and message." });
      return;
    }

    setLoading(true);

    try {
      console.log("Sending to API:", { name, email, title, message });

      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, title, message }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Server error");

      localStorage.setItem('contactId', data.contactId);
      setContactId(data.contactId);
      setStatus({ type: "success", text: "Message sent successfully. " });
      setName("");
      setEmail("");
      setTitle("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", text: err.message || "Failed to send message" });
    } finally {
      setLoading(false);
    }
  };

  const checkStatus = async () => {
    if (!contactId) return;
    try {
      const res = await fetch(`${apiBase}/api/contact/${contactId}`);
      const data = await res.json();
      if (res.ok) {
        setCurrentStatus(data.status);
      }
    } catch (err) {
      console.error('Error checking status:', err);
    }
  };

  return (
    <section id="contact" className="flex justify-center items-center min-h-screen p-4 scroll-mt-28">
      <div
        className="w-full max-w-7xl rounded-3xl p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${ContactImage})` }}
      >
        <p className="text-center text-sm text-blue-400 underline mb-5 mt-5">CONTACT</p>
        <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-6">
          Feel Free to Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full name"
            className="w-full max-w-5xl p-3 rounded-lg border border-white bg-white/20 text-white placeholder-white/70 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            className="w-full max-w-5xl p-3 rounded-lg border border-white bg-white/20 text-white placeholder-white/70 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="w-full max-w-5xl p-3 rounded-lg border border-white bg-white/20 text-white placeholder-white/70 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows="4"
            className="w-full max-w-5xl p-3 rounded-lg border border-white bg-white/20 text-white placeholder-white/70 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {status && (
            <div className={`text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
              {status.text}
            </div>
          )}
          {contactId && (
            <div className="text-sm text-blue-400">
              Current Status: {currentStatus || "Checking..."}
              <button
                onClick={checkStatus}
                className="ml-2 px-2 py-1 bg-blue-500 text-white rounded text-xs"
              >
                Refresh Status
              </button>
            </div>
          )}
          <button
            disabled={loading}
            type="submit"
            className="mt-2 w-1/2 max-w-xs p-3 rounded-2xl border border-white text-center text-white hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? "SENDING..." : "SEND YOUR MESSAGE"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

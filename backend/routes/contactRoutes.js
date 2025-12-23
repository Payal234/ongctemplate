const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    console.log("CONTACT API HIT:", req.body);

    const { name, email, title, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please fill required fields" });
    }

    const contact = await Contact.create({ name, email, title, message });

    res.status(201).json({ message: "Message sent successfully", contactId: contact._id });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/contact - Fetch all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    console.error("FETCH CONTACTS ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/contact/:id - Update contact status
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (err) {
    console.error("UPDATE CONTACT ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/contact/:id - Fetch single contact
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (err) {
    console.error("FETCH CONTACT ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

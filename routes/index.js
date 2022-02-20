const express = require("express");

const {
  searchContacts,
  searchContactsById,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contact.controller");
const router = express.Router();
const Contact = require("../model/contact.model");

router.get("/contacts", (req, res) => {
  searchContacts(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.get("/contact/:contactId", (req, res, next) => {
  searchContactsById(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(500).json({ message: "Internet Server Error" });
    });
});
router.post("/contact", (req, res) => {
  createContact(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.patch("/contact", (req, res) => {
  updateContact(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.delete("/contact", (req, res) => {
    deleteContact(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(500).json({ message: "Internet Server Error" });
    });
});

module.exports = router;

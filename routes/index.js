const express= require('express');
const { searchContacts } = require('../controllers/contact.controller');
const router = express.Router();

router.get("/contacts",(req,res) => {
    searchContacts(req).then( result => {
       res.status(200).json(result);
    }).catch(e => {
        res.status(500).json({message : "Internet Server Error"});
    })
    
});

module.exports = router;
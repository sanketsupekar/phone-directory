const Contact = require("./../model/contact.model");

async function searchContacts(req){

    const searchQuery = req.query.search && req.query.search.toLowerCase();
    console.log(searchQuery);
    const contactData = await Contact.find({
        $or : [
            {firstName: { $regex: searchQuery, $options: "i" }},
            {lastName: { $regex: searchQuery, $options: "i" }}
        ] 
        
    });
    return contactData;
}
module.exports = { searchContacts };
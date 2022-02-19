const Contact = require("./../model/contact.model");

async function searchContacts(req) {
  const searchQuery = req.query.search && req.query.search.toLowerCase();
  console.log(searchQuery);
  const contactData = await Contact.find({
    $or: [
      { firstName: { $regex: searchQuery, $options: "i" } },
      { lastName: { $regex: searchQuery, $options: "i" } },
    ],
  });
  return contactData;
}

async function searchContactsById(req) {
  const contactId = req.params.contactId;
  // console.log(searchQuery);
  const contactData = await Contact.findById(contactId);
  return contactData;
}

var qs = require("querystring");

async function createContact(request) {
  if (request.method == "POST") {
    var body = "";
    request.on("data", function (data) {
      body += data;
      console.log(body);
      if (body.length > 1e6) {

        request.connection.destroy();
      }
    });
    request.on("end", function () {
      var POST = qs.parse(body);
    });
  }
}

module.exports = { searchContacts, searchContactsById, createContact };

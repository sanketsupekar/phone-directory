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


async function createContact(request) {
    const data = request.body;
    const createData = await Contact.insertMany([data]);
    return createData;
}

async function updateContact(request) {
  const data = request.body;
  //console.log(data._id);
  const updateData = await Contact.updateOne({"_id": data._id},{$set: data}).catch(e => console.log("errrr",e));
  return updateData;
}

async function deleteContact(request) {
  const data = request.body;
  const deleteData = await Contact.deleteOne(data);
  return deleteData;
}


module.exports = { searchContacts, searchContactsById, createContact, updateContact,deleteContact};

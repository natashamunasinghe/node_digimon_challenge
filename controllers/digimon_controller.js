const DigimonModel = require("./../database/models/digimon_model");

//shows list of all resources
function index(req, res) {

}

//logic for creating a resource
async function create(req, res) {
    let {name, bio, superpower} = req.body;
    let digimon = await DigimonModel.create({ name, bio, superpower })
        // .catch(err => res.status(500).send(err));
    res.redirect(`/digimons/${digimon._id}`);
}

//logic to show the form which we use to create a resource 
function make(req, res) {
    res.render("digimon/new");
}

//logic for deleting a resource 
function destroy(req, res) {

}

//logic for showing a single resource 
async function show(req, res) {
    let { id } = req.params;
    let digimon = await DigimonModel.findById(id);
    res.render("digimon/show", {digimon});
}

//logic for updating a single resource 
function update(req, res) {

}

//logic for shows the form to edit a single resource 
function edit(req, res) {

}

module.exports = {
    index,
    create,
    edit,
    show,
    update,
    destroy,
    make
}
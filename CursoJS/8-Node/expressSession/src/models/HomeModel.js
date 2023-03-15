const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose")

const HomeSchema = new mongoose.Schema({
    titulo: {type: String, require: true},
    descricao: String

})

const HomeModel = mongoose.model('Home',HomeSchema)

module.exports = HomeModel
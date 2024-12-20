const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema([{
    comment: { type: String, required: true },
    shopId: { type: mongoose.Schema.Types.ObjectId , required: true },
    username : { type: String, required: true },
    rating: { type: Number, required: true }
}]);


const Comments = mongoose.model('Comments', commentsSchema)
module.exports = Comments
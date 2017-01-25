const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema({
    stars: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    beer: {
        type: Schema.Types.ObjectId,
        ref: 'Beer',
        required: true
    },
    comments: {
        type: String
    }
});

module.exports = mongoose.model('Review', schema);

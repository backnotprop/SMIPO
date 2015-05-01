/**
 * @author Michael Ramos
 *
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * This is the schema for all member information
 * Customized for Michael Ramos (me)
 * @type {Schema}
 */
var MemberSchema = new Schema({
    fullname: String,
    classyear: String,
    title: String,
    pic: String
});

// schema export
module.exports = mongoose.model('Member', MemberSchema);



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
var AlumniSchema = new Schema({
    fullname: String,
    classyear: String,
    email: String,
    phone: String,
    city: String
});

// schema export
module.exports = mongoose.model('Alumni', AlumniSchema);



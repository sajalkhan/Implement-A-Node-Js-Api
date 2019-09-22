const mongoose = require('mongoose');

const mySchema = mongoose.Schema({
    strA : String,
    strB : String
});

const myData = mongoose.model('Test_API',mySchema);

module.exports = myData;
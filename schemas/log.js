var mongoose = require('mongoose');

var LogSchema = new mongoose.Schema({
  action: String,
  timestamp: Date,
  userId: String	
});

module.exports = mongoose.model('Log', LogSchema);
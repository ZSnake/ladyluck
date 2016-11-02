var mongoose = require('mongoose');

var ScopeSchema = new mongoose.Schema({
  scope: String,
  views: String
});

module.exports = mongoose.model('Scope', ScopeSchema);
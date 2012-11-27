/**

  @module       registry
  @description  object registry

*/
require("Object");

var is           = require("is");
var hasOwnKey    = is.hasOwnKey;
var objects      = {};

exports.add = function(object) {

  if (hasOwnKey(object.id, objects)) {
    //throw Error.spawn("object with id ("+ object.id +") is already registered");
  }
  objects[object.id] = object;

};

exports.get = function(id) {

  if (!hasOwnKey(id, objects)) {
    throw Error.spawn("object with id ("+ id +") cannot be found");
  }
  return objects[id];

};

exports.remove = function(object) {

  delete objects[this.get(object.d)];

};


exports.__flush__ = function() {

  objects = {};

};

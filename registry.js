/**

  @module       registry
  @description  object registry

*/
require("Object");

var is           = require("is");
var hasOwnKey    = is.hasOwnKey;
var objects      = {};


var has = exports.has = function has (id) {

  return hasOwnKey(id, objects);

}

exports.add = function(object) {

  if (has(object.id)) {
    throw Error.spawn("object with id ("+ object.id +") is already registered with registry");
  }
  objects[object.id] = object;

};


exports.get = function(id) {

  if (!has(id)) {
    throw Error.spawn("object with id ("+ id +") cannot be found in registry");
  }
  return objects[id];

};


exports.__flush__ = function() {

  objects = {};

};

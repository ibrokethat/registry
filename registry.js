/**

  @module       registry
  @description  object registry

*/
var is           = require("super-is");
var hasOwnKey    = is.hasOwnKey;
var objects      = {};


var has = exports.has = function has (id) {

  return hasOwnKey(id, objects);

}

exports.add = function(object) {

  if (has(object.id)) {
    throw new Error("object with id ("+ object.id +") is already registered with registry");
  }
  objects[object.id] = object;

};


exports.get = function(id) {

  if (!has(id)) {
    throw new Error("object with id ("+ id +") cannot be found in registry");
  }
  return objects[id];

};


exports.objects = objects;

exports.__flush__ = function() {

  objects = {};

};

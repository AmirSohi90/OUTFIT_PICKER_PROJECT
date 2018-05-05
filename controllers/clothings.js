const Clothing = require('../models/Clothing');

function indexRoute(req, res, next){
  Clothing
    .find()
    .then(clothings => res.json(clothings))
    .catch(next);
}

function createRoute(req, res, next){
  return Clothing.create(req.body)
    .then(clothing => res.status(201).json(clothing))
    .catch(next);
}

function updateRoute(req, res, next){
  return Clothing.findById(req.params.id)
    .then(clothing => Object.assign(clothing, req.body))
    .then(clothing => clothing.save())
    .then(clothing => res.json(clothing))
    .catch(next);
}

function showRoute(req, res, next){
  return Clothing.findById(req.params.id)
    .then(clothing => res.json(clothing))
    .catch(next);
}

function deleteRoute(req, res, next){
  return Clothing.findById(req.params.id)
    .then(clothing => clothing.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  update: updateRoute,
  show: showRoute,
  delete: deleteRoute
};

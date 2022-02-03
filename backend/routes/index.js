﻿const CONSTANTS = require("../constants");
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const sampleData = require("../sampleData");
const fs = require('fs');


const router = express.Router();
// MasterDetail Page Endpoint
router.get(CONSTANTS.ENDPOINT.MASTERDETAIL, (req, res) => {
  res.json(sampleData.textAssets);
});

//? MY OWN ENDPOINT
router.get('/test', (req, res) => {
  let fact = CONSTANTS.DATA.CATFACTS[Math.ceil(Math.random()*CONSTANTS.DATA.CATFACTS.length-1)];
  res.json({
    message: fact
  });
});

//? example#1 - Return url to a picture
router.get('/picture', (req, res) => {
  res.json({url: 'https://whatifgaming.com/wp-content/uploads/2021/10/intro-1620848947-1.jpg'});
});

//? example#2 - What is and how to use it? Observable
router.get('/observable-test/:type', (req, res) => {
  var type = req.params['type'];
  switch (type) {
    case 'string':
      res.json('I am a string');
      break;
    case 'number':
      res.json(1);
      break;
    case 'boolean':
      res.json(true);
      break;
    case 'json':
      res.json({
        string: 'string',
        number: 1,
        boolean: true,
      });
      break;
    default:
      res.send('unknown request type');
      break;
  }
})

//? example#3 - Posting data from the form into API and returning something
let formData;
router.post('/contact', (req, res) => {
  formData = req.body;
  res.send();
});

router.get('/contact', (req, res) => {
  res.send(formData);
});

//* LIST ENDPOINTS
router.get(CONSTANTS.ENDPOINT.LIST, function(req, res) {
  res.json(sampleData.listTextAssets);
});

router.post(CONSTANTS.ENDPOINT.LIST, function(req, res) {
  let listItem = {
    text: req.body.text,
    id: uuidv4()
  };
  sampleData.listTextAssets.unshift(listItem);
  res.json(listItem);
});

router.delete(CONSTANTS.ENDPOINT.LIST + "/:id", function(req, res) {
  const { id } = req.params;
  var index = sampleData.listTextAssets.findIndex(
    listItem => listItem.id === id
  );
  if (index > -1) {
    sampleData.listTextAssets.splice(index, 1);
    res.json({ id, text: "This commented was deleted" });
  } else {
    res.status(404).send("Could not find item with id:" + id);
  }
});

// Grid Page Endpoint
router.get(CONSTANTS.ENDPOINT.GRID, (req, res) => {
  res.json(sampleData.textAssets);
});

module.exports = router;

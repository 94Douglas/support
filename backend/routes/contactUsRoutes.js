const mongoose = require('mongoose')
const express = require("express");
const router = express.Router({ mergeParams: true });
// const {
//   getContactInfo,
//   addContactInfo,
// } = require("../controllers/contactUsController");
const ContactUsSchema = require('../models/contactUsModel')

// CREATE Contact Person
router.route("/create-contact-name").post((req, res, next) => {
    ContactUsSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Contact Person
router.route('/').get((req, res) => {
    ContactUsSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  // Get Single Contact Person
  router.route('/edit-contact-name/:id').get((req, res) => {
    ContactUsSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  // Update Contact Person
  router.route('/update-contact-name/:id').put((req, res, next) => {
    ContactUsSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
          console.log(error)
        return next(error);
      } else {
        res.json(data)
        console.log('Updated successfully !')
      }
    })
  })
  // Delete Contact Person
  router.route('/delete-contact-name/:id').delete((req, res, next) => {
    ContactUsSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  module.exports = router;

const mongoose = require("mongoose");
const customerModel = require("../Models/customermodel");



//! create customer
exports.createcustomer = async (req, res) => {
    try {
      let reqBody = req.body;
      let data = await customerModel.create(reqBody);
      res.status(200).json({ status: "Success", data: data });
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }
  };



//rade customer


exports.readcustomer = async (req, res) => {
    try {
      let data = await customerModel.aggregate([
        {
          $project: {
            name: 1,
            add: 1,
            phone: 1,
          },
        },
      ]);
      res.status(200).json({ status: "Success", data: data });
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }
  };

//update customer


exports.updatecustomer = async (req, res) => {
  try {
    let id = new mongoose.Types.ObjectId(req.params.id);
    let query = { _id: id };
    let reqBody = req.body;
    let data = await customerModel.updateOne(query, reqBody);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "error", error: e.toString() });
  }
};

//delete customer
exports.deletecustomer = async (req, res) => {
  let id = new mongoose.Types.ObjectId(req.params.id);
  let query = { _id: id };
  try {
    let data = await customerModel.deleteOne(query);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "error", error: e.toString() });
  }
};

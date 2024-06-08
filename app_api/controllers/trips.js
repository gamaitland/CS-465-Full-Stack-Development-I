const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all of the trips
// Regardless of outcome, the response must include HTML status code
// and JSOn message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        //Uncomment the following line to show the results of query
        // on the console
        // console.log(q)

    if(!q)
        { //Database returned no data
            return res
                 .status(404)
                 .json(err);
        } else { //return resulting trip list
            return res
                .status(200)
                .json(q)
        }

};

// GET: /trips:tripCode - lists a single trip
// Regardless of outcome, the response must include HTML status code
// and JSOn message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) //return single record
        .exec();

        //Uncomment the following line to show the results of query
        // on the console
        // console.log(q)

    if(!q)
        { //Database returned no data
            return res
                 .status(404)
                 .json(err);
        } else { //return resulting trip list
            return res
                .status(200)
                .json(q);
        }

};

module.exports = {
    tripsList,
    tripsFindByCode
};
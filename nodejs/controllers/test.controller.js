const test = require('./../models/test.model');


exports.findAll = (req, res) => {
    test.list()
        .then(response=> {
            res.status(200).send({data: response,message: "Success!"})
        })
        .catch(err => console.log(err));
};
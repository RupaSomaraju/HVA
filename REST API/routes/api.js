const express = require('express');
const router = express.Router();
const Student = require('../models/student');

//get the data from the db
router.get('/students', function (req, res, next) {
    /*Student.find({}).then(function(stuent){
        res.send(student);
    });
    
    */
   

    Student.aggregate([{ $geoNear: { near: 
        { type: "point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
         spherical: true, maxDistance: 100000, distanceField: "dist.calculated", spherical: true } }]).then(function (students)
          {
        res.json(students);

    });
});


//create/add a new student to the db
router.post('/students', function (req, res, next) {
    /*var student=new Student(req.body);
    student.save();
    */
    Student.create(req.body).then(function (student) {
        res.json(student);
        /*type:'POST',
        name:req.body.name,
        rank: req.body.rank
});
*/
        /*res.send({
        type:'POST',
        name:req.body.name,
        rank: req.body.rank git push --set-upstream origin master

        */
    }).catch(next);

});


//update a student to the db
router.put('/students/:id', function (req, res, next) {
    Student.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (student) {
        Student.findOne({ _id: req.params.id }).then(function (student) {
            res.json(student);
        });

    });
});

//
router.delete('/students/:id', function (req, res, next) {
    //console.log(req.params.id);
    Student.findByIdAndRemove({ _id: req.params.id }).then(function (student) {
        res.json(student);
    });
    //res.send({type:'DELETE'});
});

module.exports = router;  
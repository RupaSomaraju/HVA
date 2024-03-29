const mongoose=require('mongoose');
const Schema=mongoose.Schema;





//creating a geo location schema
const GeoSchema = new Schema({
    type:{
        type:String,
        default:"point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
});

//create a schema and model for student
const studentSchema=new Schema({
    name:{
        type: String,
        required: [true,'Name field is required']
    },
    rank:{
        type:String
    },
    availabile:{
        type:Boolean,
        default:false
    },
   /* long:{}
    lat:{}
    */
    geometry:GeoSchema
});

const Student = mongoose.model('Student',studentSchema);
module.exports=Student;
const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    name:String,
    add:String,
    phone:{
        type:String,
        validate:{
            validator:function(value){
               return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
            },
            massage:"11 digit mobile number require"
        }
    },
    deu:{type:Number, default:0}
},
{   
    versionKey: false,
    timestamps: false,   
})

const customerModel = mongoose.model('customer', DataSchema)
module.exports=customerModel
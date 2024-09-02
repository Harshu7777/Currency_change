const mongoose = require('mongoose');

const conversionSchema = new mongoose.Schema({
    from: { 
        type: String, 
        required: true 
    },
    to: { 
        type: String, 
        required: true
     },
    amount: { 
        type: Number,
         required: true 
    },
    result: {
         type: Number, 
         required: true
     },
},{
    timestamps : true
})

const Conversion = mongoose.model("Conversion" , conversionSchema);

module.exports = Conversion;
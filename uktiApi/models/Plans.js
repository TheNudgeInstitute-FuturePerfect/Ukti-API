const { Schema, model } = require("mongoose");

const schema = new Schema({
  Name: { type: String,maxlength: 100,require:true },
  Amount :{type:Number,minlength: 1,require:true},
  Description :{ type: String,maxlength: 200,require:true },
},
{
  timestamps: {
    createdAt:'CREATEDTIME',
    updatedAt:'MODIFIEDTIME'
  },
});

module.exports = model("Plans", schema);
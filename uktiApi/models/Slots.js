const { Schema, model } = require("mongoose");

const schema = new Schema({
  topic : { type: String,maxlength: 100,require:true },
  date: {type: Date,default: Date.now},
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  description :{ type: String,maxlength: 500 },
},
{
  timestamps: {
    createdAt:'CREATEDTIME',
    updatedAt:'MODIFIEDTIME'
  },
});

module.exports = model("Slots", schema);
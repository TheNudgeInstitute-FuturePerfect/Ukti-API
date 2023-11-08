const { Schema, model } = require("mongoose");

const schema = new Schema({
  UserID : { type: Schema.Types.ObjectId, ref: 'Users' },
  PlanID: { type: Schema.Types.ObjectId, ref: 'Plans' },
  date: {type: Date,default: Date.now},
},
{
  timestamps: {
    createdAt:'CREATEDTIME',
    updatedAt:'MODIFIEDTIME'
  },
});

module.exports = model("Payments", schema);
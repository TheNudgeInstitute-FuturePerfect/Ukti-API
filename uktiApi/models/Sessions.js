const { Schema, model } = require("mongoose");

const schema = new Schema({
  UserID : { type: Schema.Types.ObjectId, ref: 'Users' },
  SlotID: { type: Schema.Types.ObjectId, ref: 'Slots' },
  usersLimit: {type: Number,require:true},
},
{
  timestamps: {
    createdAt:'CREATEDTIME',
    updatedAt:'MODIFIEDTIME'
  },
});

module.exports = model("Sessions", schema);
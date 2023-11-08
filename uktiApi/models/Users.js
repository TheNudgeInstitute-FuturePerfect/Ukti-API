const { Schema, model } = require("mongoose");

const schema = new Schema({
  Name: { type: String,maxlength: 100,require:true },
  Phone:{type:String,maxlength: 10,require:true},
  gender: {
    type: String,
    enum: ['male', 'female', 'non-binary', 'other'],
    require:true
  },
  Date: {type: Date,default: Date.now},
  Photo :{type:String},
  TalkTime:{type:Number,default:0},
  BadgesEarned :{type:Number,default:0},
  SessionsAttended : {type:Number,default:0},
  TermsAndConditions : {
    type: Boolean,
    enum: [true,false],
    default:true,
    require:true
  },
  UpdatesOnWhatsAppConsent : {
    type: Boolean,
    enum: [true,false],
    default:false
  },
  IsTrialCompleted : {
    type: Boolean,
    enum: [true,false],
    default:false
  }
},
{
  timestamps: {
    createdAt:'CREATEDTIME',
    updatedAt:'MODIFIEDTIME'
  },
});

module.exports = model("Users", schema);
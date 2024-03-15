import { Schema, model } from "mongoose";

const pinCodeSchema = new Schema({
  pin: {
    type: Number,
    required: true,
  },
  office: {
    type: String,
    required: true,
  },
  office_type: {
    type: String,
    required: true,
  },
  delivery: {
    type: String,
    default: 0,
  },
  division: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  circle: {
    type: String,
    required: true,
  },
  taluk: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state_id: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  related_suboffice: {
    type: String,
    required: true,
  },
  related_headoffice: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
});

export const Pincode = model("Pincode", pinCodeSchema);

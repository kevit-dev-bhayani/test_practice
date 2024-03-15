import { Pincode } from "./pincode.model";
import axios from "axios";

export const checkAvailablePincode = async (pincode: number) => {
  try {
    console.log("Getting pincode from db");
    const pincodes = await Pincode.find({
      pin: pincode,
    });
    return pincodes;
  } catch (error) {
    console.log("error occured which checking pincode in db");
    throw error(error);
  }
};
export const searchPincodeApi = async (pincode: number) => {
  try {
    console.log("Getting pincode from Api");
    const options = {
      method: "POST",
      url: "https://pincode.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "bc35c1f5f7mshc91314fd01724c2p1abde3jsn2bd33c2a9c63",
        "X-RapidAPI-Host": "pincode.p.rapidapi.com",
      },
      data: {
        searchBy: "pincode",
        value: pincode,
      },
    };
    const pincodes = await axios.request(options);
    return pincodes.data;
  } catch (error) {
    console.log("error occured which fetching pincode from api");
  }
};

export const createPincodes = async (pincodes) => {
  try {
    console.log("Inserting new Pincode in DB");
    const response = await Pincode.insertMany(pincodes);
  } catch (error) {
    console.log("error occured which push  pincode in db", error.message);
    throw error(error);
  }
};

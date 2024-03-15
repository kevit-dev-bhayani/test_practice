import { Request, Response, NextFunction } from "express";
import {
  checkAvailablePincode,
  createPincodes,
  searchPincodeApi,
} from "./pincode.service";

export const searchPincode = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const pincode = +req.params.pincode;
    if (`${pincode}`.length < 6 || `${pincode}`.length < 6) {
      res
        .status(400)
        .json({ success: false, error: "Please enter valid pincode" });
    }
    const availablePin = await checkAvailablePincode(pincode);
    if (availablePin.length) {
      return res.status(200).json({ success: true, data: availablePin });
    }
    const pincodes = await searchPincodeApi(pincode);
    if (pincodes.length) await createPincodes(pincodes);
    else
      res
        .status(500)
        .json({ success: false, error: "No value found for this  pincode" });
    return res.status(200).json({ success: true, data: pincodes });
  } catch (error) {
    res.status(500).send({ error });
  }
};

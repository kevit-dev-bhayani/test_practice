import { Router } from "express";
import { searchPincode } from "./pincode.controller";

export const router = Router();
const route = "pincode";

router.get(`/${route}/find/:pincode`, searchPincode);

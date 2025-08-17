import { model } from "mongoose";
import { userSchema } from "../schema/UserSchema";

export const userModel = model('User', userSchema);
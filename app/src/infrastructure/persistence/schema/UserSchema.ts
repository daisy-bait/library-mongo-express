import { Document, Schema } from "mongoose";

export interface UserDocument extends Document {
    username: string;
    password: string;
    roles: string[];
}

export const userSchema = new Schema<UserDocument>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{ type: String }]
}, {
    collection: "users",
    timestamps: true
});
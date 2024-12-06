import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document{
    name: string;
    email: string;
    createdAt: Date;
}

const UserSchema:Schema = new Schema(
    {
        name:{type:String,require:true},
        email:{type:String,require:true,unique:true},
        createdAt: { type: Date, default: Date.now },
    },
    { versionKey: false }
);

const User = mongoose.model<IUser>("User",UserSchema);

export default User;

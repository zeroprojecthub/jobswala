import { Schema,model } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["active","resume","deactive"],
        default:"active"
    },
    adhar:{
        type:Number,
        required:true
    },
    panno:{
        type:String,
        required:true
    }

})


const UserSchema = model('User', userSchema)
export default UserSchema
import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
        minLength: [2, "Firt name must contain at least 2 charachters! "],
        maxLength: [30, "Firt name must cannot exceed 30 charachters! "]
    },
    lastName: {
        type: String,
        required:true,
        minLength: [2, "Firt name must contain at least 2 charachters! "],
        maxLength: [30, "Firt name must cannot exceed 30 charachters! "]
    },
    email: {
        type: String,
        required:true,
        validate: [validator.isEmail, "Provide a valid email"]
    },
    lastName: {
        type: String,
        required:true,
        minLength: [10, "Phone number must contain only 10 digit! "],
        maxLength: [10, "Phone number must contain only 10 digit! "]
    },
    time: {
        type: String,
        required:true,
    },
    date: {
        type: String,
        required:true,
    },


})

export const Reservation = mongoose.model("Reservation", reservationSchema)
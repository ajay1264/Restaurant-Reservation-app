import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema";



export const sendReservation = async (req, res, next) => {
     const { firstName, lastName, email, phone, date, time} = req.body;
     if(!firstName || !lastName || !email|| !phone || !date || !time){
        return next(new ErrorHandler("Please fill all the details"))
     }
     try {
        await Reservation.create(firstName, lastName, email, phone, date, time)
        res.status(200),json({
            success: true,
            message: "Reservation Sent Successfully"
        })
     } catch (error) {
        if (error.name === "ValidationError") {
            const validationError = object.values(error.errors).map(err=>err.message)
        }
     }
}
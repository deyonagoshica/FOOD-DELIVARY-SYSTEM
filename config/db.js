import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://akshanaksha7_db_user:t1wDgdCSisopZxLd@pattamani.zwydehk.mongodb.net').then(()=>{
       console.log('DB connected') ;
    })
}
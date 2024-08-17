import mongoose from "mongoose";

const db_connect = async () => {
    try {
        const connected = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`MongoDB Connected !! \n ${connected.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

export default db_connect;

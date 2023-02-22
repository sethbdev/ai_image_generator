import mongoose from "mongoose";

//strictQuery to help with search functionality
const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
}

//to be imported in ./server/index.js
export default connectDB;
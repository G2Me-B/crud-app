import mongoose from "mongoose"

// Establishing Database Connection
export const connectDB = async () => {
    try{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1) // Exit on failure (1 means exit with failure, 0 means success )
    }
}
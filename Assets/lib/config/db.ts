import mongoose from 'mongoose'

export const ConnectDB = async() => {
    await mongoose.connect('mongodb+srv://<username>:kimi1710@cluster0.tdbas.mongodb.net/treptow-app')
    console.log('DB connected')
}
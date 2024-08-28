import mongoose from 'mongoose';

// Función para conectar a la base de datos
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://<username>:kimi1710@cluster0.tdbas.mongodb.net/treptow-app');
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', error);
        process.exit(1); // Salir del proceso si no se puede conectar
    }
};

// Definición del esquema
const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    authorImg: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Modelo de Mongoose
const PersonajeModel = mongoose.models.personaje || mongoose.model('personaje', Schema);

export default PersonajeModel;

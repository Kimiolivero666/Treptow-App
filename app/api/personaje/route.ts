import PersonajeModel, { connectDB } from "@/Assets/lib/models/PersonajeModel";
import { promises as fsPromises } from "fs";
import { NextResponse } from "next/server";

// Conexión a la base de datos
const loadDB = async () => {
    await connectDB();
};

loadDB();

// Función GET
export async function GET(_request: Request) {
    return NextResponse.json({ msg: 'API Trabajando' });
}

// Función POST con manejo de imágenes y creación de personaje
export async function POST(request: Request) {
    try {
        // Obtener los datos del formulario
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image') as File;

        // Validación de la imagen
        if (!image || !image.arrayBuffer) {
            return NextResponse.json({ error: 'No se recibió una imagen válida' }, { status: 400 });
        }

        // Convertir la imagen en un buffer
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);

        // Asegurarse de que la carpeta 'public' exista
        const path = `./public/${timestamp}_${image.name}`;
        await fsPromises.mkdir('./public', { recursive: true });

        // Guardar la imagen en el sistema de archivos
        await fsPromises.writeFile(path, buffer);

        const imgUrl = `/${timestamp}_${image.name}`;

        // Crear el objeto de datos para el personaje
        const personajeData = {
            title: formData.get('title')?.toString() || '',
            description: formData.get('description')?.toString() || '',
            category: formData.get('category')?.toString() || '',
            author: formData.get('author')?.toString() || '',
            image: imgUrl,
            authorImg: formData.get('authorImg')?.toString() || ''
        };

        // Guardar el personaje en la base de datos
        await PersonajeModel.create(personajeData);
        console.log("Personaje guardado");

        return NextResponse.json({ success: true, msg: 'Personaje Added' });
    } catch (error) {
        console.error("Error al manejar la solicitud POST:", error);
        return NextResponse.json({ error: 'Ocurrió un error al procesar la solicitud' }, { status: 500 });
    }
}

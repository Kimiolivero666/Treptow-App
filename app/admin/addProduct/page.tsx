"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Page = () => {
    const [image, setImage] = useState<File | null>(null);
    const [data, setData] = useState({
        title: '',
        description: '',
        category: 'Waldeyer Norte',
        author: 'ALex',
        authorImg: '/author_img.png'
    });

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const onSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);

        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await axios.post('/api/personaje', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            if (response.data.success) {
                toast.success(response.data.msg);
            } else {
                toast.error('Error');
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            toast.error('Error al enviar los datos');
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <p>Subir miniatura</p>
            <label htmlFor='image'>
                <Image
                    src={!image ? assets.upload_area : URL.createObjectURL(image)}
                    width={140}
                    height={70}
                    alt="Área de carga"
                />
            </label>
            <input
                onChange={handleImageChange}
                type="file"
                id='image'
                hidden
                required
            />
            <p>Nombre</p>
            <input
                name='title'
                onChange={onChangeHandler}
                value={data.title}
                type="text"
                placeholder='Type here'
                required
            />
            <p>Descripción</p>
            <textarea
                name='description'
                onChange={onChangeHandler}
                value={data.description}
                placeholder='Type here'
                required
            />
            <p>Residencia</p>
            <select
                name="category"
                onChange={onChangeHandler}
                value={data.category}
            >
                <option value="Wittemburg">Wittemburg</option>
                <option value="Waldeyer Sur">Waldeyer Sur</option>
                <option value="Waldeyer Centro">Waldeyer Centro</option>
                <option value="Waldeyer Norte">Waldeyer Norte</option>
            </select>
            <button type="submit">Crear personaje</button>
        </form>
    );
}

export default Page;

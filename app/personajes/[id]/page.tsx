'use client';

import { blog_data } from '@/Assets/assets';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image'; // Asegúrate de importar StaticImageData

interface Params {
  id: string; // Los parámetros de la URL son generalmente cadenas
}

interface BlogData {
  id: number;
  title: string;
  description: string;
  image: StaticImageData; // Ajustado para StaticImageData
  date: number;
  category: string;
  author: string;
  author_img: StaticImageData; // Ajustado para StaticImageData
}

interface PageProps {
  params: Params;
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [data, setData] = useState<BlogData | null>(null);

  // Definir la función usando useCallback para evitar recreaciones innecesarias
  const fetchPersonajeData = useCallback(() => {
    const personaje = blog_data.find((item) => item.id === Number(params.id));
    if (personaje) {
      setData(personaje);
    }
  }, [params.id]); // Dependencias

  useEffect(() => {
    fetchPersonajeData();
  }, [fetchPersonajeData]); // Incluir fetchPersonajeData en las dependencias

  return data ? (
    <div>
      <h1>{data.title}</h1>
      <Image src={data.image} alt={data.title} width={400} height={550} />
    </div>
  ) : (
    <div>No se encontró el personaje.</div>
  );
};

export default Page;

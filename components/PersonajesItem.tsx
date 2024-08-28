import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { assets } from '@/Assets/assets';
import Link from 'next/link';

// Actualiza la interfaz para aceptar StaticImageData
interface PersonajesItemProps {
  title: string;
  description: string;
  category: string;
  image: string | StaticImageData;
  id: number
}

const PersonajesItem: React.FC<PersonajesItemProps> = ({ title, description, category, image, id }) => {
  return (
    <div>
      <Link href={`/personajes/${id}`}>
      <Image src={image} alt="" width={400} height={550} />
      </Link>
      <p>{category}</p>
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
        <Link href={`/personajes/${id}`}>
          Saber más <Image src={assets.arrow} alt='' />
          </Link>
      </div>
    </div>
  )
}

export default PersonajesItem;

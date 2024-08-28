import React from 'react'
import {assets} from '@/Assets/assets'


import Image from 'next/image';
import Link from 'next/link';

const SideBar = () => {
    return (
        <div>
            <div>

            </div>
            <div>
                <Link href='/admin/addProduct'>
                <Image src={assets.add_icon} alt='' width={28} /> <p>Agregar Personaje</p>
                </Link>
            </div>
            <div>
                <Link href='/admin/personajeList'>
                <Image src={assets.blog_icon} alt='' width={28} /> <p>Lista de personajes</p>
                </Link>
            </div>
        </div>
    )
}

export default SideBar
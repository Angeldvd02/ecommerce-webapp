import { titlefont } from '../../config/fonts/fonts';
import Link from 'next/link';
import React from 'react';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';

const Topmenu = () => {
    return (
        <nav className='flex px-5 justify-between items-center w-full'>
            {/* Logo */}
            <div>
                <Link href='/' legacyBehavior>
                    <a className={` ${titlefont.className} antialiased font-bold`}>Tubarrio</a>
                </Link>
                <span> | shop </span>
            </div>
            {/* Menu */}
            <div className='hidden sm:block'>
                <Link href="/category/fruts/" legacyBehavior>
                    <a className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>Frutas</a>
                </Link>
                <Link href="/category/vegetables/" legacyBehavior>
                    <a className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>Verduras</a>
                </Link>
                <Link href="/category/meats/" legacyBehavior>
                    <a className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>Carnes</a>
                </Link>
            </div>
            {/* Search, cart and menu */}
            <div className='flex items-center'>
                <Link href="/search" legacyBehavior>
                    <a className='mx-2'>
                        <IoSearchOutline className='h-5 w-5' />
                    </a>
                </Link>
                <Link href="/cart" legacyBehavior>
                    <a className='mx-2 relative'>
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center'>5</span>
                        <IoCartOutline className='h-5 w-5' />
                    </a>
                </Link>
                <button className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>Menú</button>
            </div>
        </nav>
    );
};

export default Topmenu;

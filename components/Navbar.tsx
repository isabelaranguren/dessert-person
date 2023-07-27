
import Link from 'next/link';
import Image from 'next/image';

import React from 'react'
import { NavLinks } from '@/constant';
import { AuthProviders } from './AuthProviders';

export const Navbar = () => {
  const session = {}
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href="/">
        <Image
        src="/logo.svg"
        width={65}
        height={43}
        alt="Dessert x Person"/>
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.
            key}>
              {link.text}
              </Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
        { session ? (
          <>
          User Photo
          <Link href={"/create-recipe"}>
          Share recipes
          </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}

export default Navbar;
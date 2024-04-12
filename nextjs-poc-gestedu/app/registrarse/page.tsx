'use client';
import Button from '../ui/components/Button/button';
import GestEduIcon from '@/app/ui/assets/svg/logo-black-vertical.svg';
import UserIcon from '@/app/ui/assets/svg/user.svg';
import EmailIcon from '@/app/ui/assets/svg/email.svg';
import KeyIcon from '@/app/ui/assets/svg/key.svg';
import { useState } from 'react';
import { InputField } from '../ui/components/InputField/inputField';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='fullPageH mx-auto w-3/5 bg-peach-yellow'>
      <h1 className='text-center text-xl md:text-4xl'>¡Bienvenidx!</h1>

      <form className='mx-auto my-6 flex max-w-2xl flex-wrap gap-5'>
        <InputField
          placeholder='Nombre'
          type='text'
          name='name'
          label='Nombre'
          required={true}
          className=''
        >
          <UserIcon className='h-auto w-6 fill-garnet sm:w-8' />
        </InputField>
        <InputField
          placeholder='jane@doe.com'
          type='email'
          name='email'
          label='Correo electrónico'
          required={true}
        >
          <EmailIcon className='h-auto w-6 fill-garnet sm:w-8' />
        </InputField>
        <InputField
          placeholder='Constraseña'
          type='password'
          name='password'
          label='Contraseña'
          required={true}
        >
          <KeyIcon className='h-auto w-6 fill-garnet sm:w-8' />
        </InputField>
        <InputField
          placeholder='Confirmar contraseña'
          type='password'
          name='password'
          label='Confirmar contraseña'
          required={true}
        >
          <KeyIcon className='h-auto w-6 fill-garnet sm:w-8' />
        </InputField>

        <Button className='mx-auto w-1/3' styling='primary'>
          Registrarse
        </Button>
        <Button className='mx-auto w-1/3' styling='secondary'>
          <Link href='/'>Cancelar</Link>
        </Button>
      </form>
    </div>
  );
}

'use client';
import styles from './loginForm.module.css';
import GestEduIcon from '@/app/ui/assets/svg/logo-black-vertical.svg';
import UserIcon from '@/app/ui/assets/svg/user.svg';
import KeyIcon from '@/app/ui/assets/svg/key.svg';
import Close from '@/app/ui/assets/svg/close.svg';
import Button from '@/app/ui/components/Button/button';
import { useContext } from 'react';
import Link from 'next/link';
import { LoginModalContext } from '@/context';
import { InputField } from '../InputField/inputField';

export default function LoginForm() {
  const loginModalContext = useContext(LoginModalContext);
  function handleClick() {
    loginModalContext?.setOpen(!loginModalContext.open);
  }
  return (
    <>
      <div
        className='absolute z-0 flex size-full items-center bg-bittersweet/20'
        onClick={handleClick}
      ></div>
      <div className='bg-ivory w-full px-6 py-8 sm:{w-2/3 max-w-lg m-auto px-16 py-10} rounded-xl max-h-fit absolute inset-0 z-1'>
        <Close
          className='absolute right-4 top-4 size-8 cursor-pointer fill-garnet hover:fill-bittersweet sm:size-10'
          onClick={handleClick}
        />
        <form className='flex flex-col items-center justify-between gap-5 pb-4'>
          <GestEduIcon className='h-auto w-2/4' />
          <h1 className='text-2xl font-bold text-black'>Iniciar sesión</h1>
          <InputField
            placeholder='Ingresar correo'
            type='email'
            name='email'
            label='Correo electrónico'
            required={true}
          >
            <UserIcon className='h-auto w-6 fill-garnet sm:w-8' />
          </InputField>
          <InputField
            placeholder='Ingresar contraseña'
            type='password'
            name='password'
            label='Contraseña'
            required={true}
          >
            <KeyIcon className='h-auto w-6 fill-garnet sm:w-8' />
          </InputField>
          <LoginButton />
        </form>
        <div className='my-4 flex w-full flex-col gap-3 text-center'>
          <Link className={styles.links} href={'#'}>
            Olvidé mi contraseña
          </Link>
          <span>
            ¿No tienes aun una cuenta?{' '}
            <Link className={styles.links} href={'/registrarse'}>
              Regístrate
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

function LoginButton() {
  return (
    <Button className='w-1/2' styling='primary'>
      Ingresar
    </Button>
  );
}

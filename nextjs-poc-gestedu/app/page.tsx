'use client';
import GestEduLogo from '@/app/ui/assets/svg/logo-light-vertical.svg';
import LoginForm from './ui/components/LoginForm/loginForm';
import { useContext } from 'react';
import { LoginModalContext } from '@/context';

export default function Home() {
  const loginModalContext = useContext(LoginModalContext);
  return (
    <main className='flex flex-col'>
      <section className='flex flex-1 flex-col items-center justify-center'>
        <GestEduLogo />
        <p className=' text-md text-ivory'>
          Administrador de gestión educativa
        </p>
      </section>
      {loginModalContext?.open && <LoginForm />}
    </main>
  );
}

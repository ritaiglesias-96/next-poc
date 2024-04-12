'use client';
import styles from './navbar.module.css';
import GestEduIcon from '@/ui/assets/svg/logo-black-horizontal.svg';
import Login from '@/ui/assets/svg/login.svg';
import Link from 'next/link';
import { useContext } from 'react';
import { LoginModalContext } from 'context';

export function Navbar() {
  const loginModalContext = useContext(LoginModalContext);
  function handleClick() {
    loginModalContext?.setOpen(true);
  }
  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <GestEduIcon />
      </Link>
      {!loginModalContext?.open && (
        <button className={styles.signin} onClick={handleClick}>
          <Login />
          <span>Ingresar</span>
        </button>
      )}
    </nav>
  );
}

import styles from './navbar.module.css';
import Image from 'next/image';
import GestEduIcon from '@/ui/assets/svg/logo-black-horizontal.svg';
import Login from '@/ui/assets/svg/login.svg';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image src={GestEduIcon} alt='GestEdu icon' />
      <Link className={styles.signin} href='/login'>
        <Image src={Login} alt='Login icon' />
        <span>Ingresar</span>
      </Link>
    </nav>
  );
}

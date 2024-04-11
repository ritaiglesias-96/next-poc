import Image from 'next/image';
import GestEduLogo from '@/ui/assets/svg/logo-light-vertical.svg';
import { Navbar } from '@/ui/components/navbar/navbar';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Navbar />
      <section className='flex flex-col items-center justify-center flex-1'>
        <Image src={GestEduLogo} alt='GestEdu Logo' />

        <p className='text-lg text-ivory'>Administrador de gestión educativa</p>
      </section>
    </main>
  );
}

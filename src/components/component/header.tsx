'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo_amarela.png';

export function Header() {
  const handleScroll = useCallback((event: any) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-8 md:py-5 bg-verdeGoias text-branco ">
      <Link href="/" className="flex items-center hover:scale-105" prefetch={false}>
        <Image
          src={Logo}
          alt="Logo + tempo"
          width={65}
          height={25}
          className="w-full object-cover"
          style={{ aspectRatio: '65/25', objectFit: 'cover' }}
        />
      </Link>
      <nav className="flex items-center space-x-4 md:space-x-6 ">
        <Link href="/" className="text-sm font-bold hover:underline underline-offset-4 text-branco hover:scale-105" prefetch={false}>
          Home
        </Link>
        <a
          href="#testimonials"
          onClick={handleScroll}
          className="text-sm font-bold hover:underline underline-offset-4 text-branco hover:scale-105 "
        >
          Sobre nós
        </a>
        <a
          href="#answers"
          onClick={handleScroll}
          className="text-sm font-bold hover:underline underline-offset-4 text-branco hover:scale-105"
        >
          Dúvidas
        </a>
        <Link
          href="/scheduling"
          className="inline-flex h-9 items-center justify-center rounded-md border border-verdeGoias bg-amareloGoias px-4 py-2 text-sm font-medium text-verdeGoias shadow-sm transition-transform transform hover:scale-105 hover:bg-white hover:text-verdeGoias hover:border-verdeGoias focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-verdeGoias disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          AGENDAR AGORA
        </Link>
      </nav>
    </header>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

import Link from "next/link"
import Logo from '../../../public/logo_amarela.png';
import Image from "next/image";

export function FooterAlternative() {
  return (
    <footer className="bg-verdeGoias py-6 px-6 text-branco">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center" prefetch={false}>
        <Image
          src={Logo}
          alt="Logo + tempo"
          width={65}
          height={25}
          className="w-full object-cover"
          style={{ aspectRatio: '65/25', objectFit: 'cover' }}
        />
      </Link>
        </div>
        <div className="text-xs text-amareloClaro">&copy; 2024 Mais Tempo GO. Todos os direitos reservados.</div>
        <Link href="#" className="text-sm text-amareloGoias hover:underline" prefetch={false}>
          suporte@maistempogo.com.br
        </Link>
      </div>
    </footer>
  )
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
  )
}

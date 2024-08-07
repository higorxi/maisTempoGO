import Link from "next/link"
import { JSX, SVGProps } from "react"
import Image from "next/image"
import Logo from '../../../public/logo_amarela.png';

export function HeaderAlternative() {
  return (
    <header className="w-full bg-verdeGoias shadow-md shadow-[rgba(0,0,0,0.1)] py-4">
      <div className="container mx-auto flex items-center justify-center">
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
    </header>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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

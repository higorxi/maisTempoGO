import Link from "next/link"
import { JSX, SVGProps } from "react"

export function HeaderAlternative() {
  return (
    <header className="w-full bg-background shadow-md shadow-[rgba(0,0,0,0.1)] py-4">
      <div className="container mx-auto flex items-center justify-center">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Acme Inc.</span>
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

import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
      <Link href="#" className="flex items-center" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Teste</span>
      </Link>
      <nav className="flex items-center space-x-4 md:space-x-6">
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Sobre nós
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Dúvidas
        </Link>
        <Link
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Agendar Agora
        </Link>
      </nav>
    </header>
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

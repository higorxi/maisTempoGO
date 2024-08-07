import Link from "next/link"

export function FooterAlternative() {
  return (
    <footer className="bg-muted py-6 text-muted-foreground">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-sm font-medium">Mais Tempo GO</span>
        </div>
        <div className="text-xs">&copy; 2024 Mais Tempo GO. All rights reserved.</div>
        <Link href="#" className="text-sm hover:underline" prefetch={false}>
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

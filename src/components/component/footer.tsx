import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted py-12 px-6 text-muted-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="text-xl font-bold">+</span><span className="text-lg font-bold">TEMPO GO</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:underline">
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:underline">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:underline">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:underline">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="grid gap-2">
          
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-bold">Principais Serviços</h4>
          <a href="#" className="text-sm hover:underline">
            CNH - RENOVAÇÃO
          </a>
          <a href="#" className="text-sm hover:underline">
            RG - 1 VIA
          </a>
          <a href="#" className="text-sm hover:underline">
            RG - 2 VIA
          </a>
          <a href="#" className="text-sm hover:underline">
            SANEAGO - TRATAMENTO DE CASOS EXPECIONAIS
          </a>
          <a href="#" className="text-sm hover:underline">
            PROCON
          </a>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-bold">Principais Órgãos</h4>
          <a href="#" className="text-sm hover:underline">
            AGEHAB
          </a>
          <a href="#" className="text-sm hover:underline">
          AGRODEFESA
          </a>
          <a href="#" className="text-sm hover:underline">
          COREN
          </a>
          <a href="#" className="text-sm hover:underline">
          DETRAN
          </a>
          <a href="#" className="text-sm hover:underline">
          IPASGO
          </a>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-bold">Recursos</h4>
          <a href="#" className="text-sm hover:underline">
            Blog
          </a>
          <a href="#" className="text-sm hover:underline">
            Documentation
          </a>
          <a href="#" className="text-sm hover:underline">
            Tutorials
          </a>
          <a href="#" className="text-sm hover:underline">
            Templates
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-12 flex flex-col items-center gap-4 px-4 text-xs sm:flex-row sm:justify-between">
        <p>&copy; 2024 Mais Tempo GO. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="/privacyPolicy" className="hover:underline">
            Política de Privacidade
          </a>
          <a href="/termsOfUser" className="hover:underline">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
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

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

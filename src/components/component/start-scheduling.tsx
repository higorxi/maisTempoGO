import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

export function StartScheduling() {
  return (
    <section className="w-full py-20 bg-gradient-radial from-[#F0F9FF] via-[#F0F9FF]/80 to-[#F0F9FF]/20">
      <div className="w-full px-4 md:px-6 xl:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 items-center justify-between gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Agende agora mesmo sua ida ao Vapt Vupt
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Escolha o órgão e os serviços que você necessita e comece a agendar sua ida.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center justify-center gap-2 flex-1">
                    <ComputerIcon className="h-4 w-4" />
                    <span>Orgãos</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="start">
                  <DropdownMenuItem>DETRAN</DropdownMenuItem>
                  <DropdownMenuItem>EQUATORIAL</DropdownMenuItem>
                  <DropdownMenuItem>TJE</DropdownMenuItem>
                  <DropdownMenuItem>SANEAGO</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center justify-center gap-2 flex-1">
                    <ServerIcon className="h-4 w-4" />
                    <span>Serviços</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="start">
                  <DropdownMenuItem>CNH</DropdownMenuItem>
                  <DropdownMenuItem>RG 1 VIA</DropdownMenuItem>
                  <DropdownMenuItem>RG 2 VIA</DropdownMenuItem>
                  <DropdownMenuItem>Consultar Multas</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex justify-center">
              <Button className="w-full sm:w-auto">Iniciar Agendamento</Button>
            </div>
          </div>
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
            <img src="/placeholder.svg" alt="3D Logo" className="object-contain object-right" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComputerIcon(props: any) {
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
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  );
}

function ServerIcon(props: any) {
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

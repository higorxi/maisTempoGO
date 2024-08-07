"use client";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import FotoPrincipal from "../../../public/foto_agendamento.jpg";
import Image from "next/image";

export function StartScheduling() {
  const router = useRouter();

  const handleStartScheduling = () => {
    router.push('/scheduling');
  };

  return (
    <section className="relative w-full py-20 bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-green-200 mix-blend-multiply opacity-50">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#00a859" opacity="0.3" />
            <circle cx="150" cy="150" r="50" fill="#00a859" opacity="0.8" />
            <circle cx="20" cy="20" r="40" fill="#00a859" opacity="0.1" />
            <circle cx="15" cy="15" r="30" fill="#00a859" opacity="0.2" />
            <circle cx="85" cy="05" r="65" fill="#00a859" opacity="0.4" />
          </svg>
          <div className="absolute inset-0 backdrop-blur-lg"></div>
        </div>
      </div>

      <div className="w-full px-4 md:px-6 xl:max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 items-center justify-between gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl md:text-5xl">
                Agende agora mesmo sua ida ao Vapt Vupt
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl">
                Escolha o órgão e os serviços que você necessita e comece a agendar sua ida.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center justify-center gap-2 flex-1 bg-white text-gray-800 border-gray-300 shadow-sm hover:bg-gray-100">
                      <ComputerIcon className="h-4 w-4" />
                      <span>Órgãos</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="bottom" align="start" className="bg-white border border-gray-300 shadow-md">
                    <DropdownMenuItem>DETRAN</DropdownMenuItem>
                    <DropdownMenuItem>EQUATORIAL</DropdownMenuItem>
                    <DropdownMenuItem>TJE</DropdownMenuItem>
                    <DropdownMenuItem>SANEAGO</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center justify-center gap-2 flex-1 bg-white text-gray-800 border-gray-300 shadow-sm hover:bg-gray-100">
                      <ServerIcon className="h-4 w-4" />
                      <span>Serviços</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="bottom" align="start" className="bg-white border border-gray-300 shadow-md">
                    <DropdownMenuItem>CNH</DropdownMenuItem>
                    <DropdownMenuItem>RG 1 VIA</DropdownMenuItem>
                    <DropdownMenuItem>RG 2 VIA</DropdownMenuItem>
                    <DropdownMenuItem>Consultar Multas</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex justify-center">
                <Button variant="main" className="w-full sm:w-auto text-white shadow-lg hover:bg-blue-700 transition-colors" onClick={handleStartScheduling}>
                  Iniciar Agendamento
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full max-w-md mx-auto bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
              <Image
                src={FotoPrincipal}
                alt='Foto mulher segurando Carteira de Identidade'
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
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

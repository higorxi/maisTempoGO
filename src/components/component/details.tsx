import { Separator } from "@/components/ui/separator"

export function Details() {
  return (
    <div className="max-w-3xl mx-auto p-6 md:p-8 lg:p-10">
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary text-primary-foreground p-6 md:p-8 lg:p-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold">Pagamento confirmado</h1>
            <CircleCheckIcon className="w-8 h-8" />
          </div>
        </div>
        <div className="p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Detalhes do serviço</h2>
              <div className="grid grid-cols-2 gap-2 md:gap-4 text-sm md:text-base">
                <div className="font-medium">Protocolo Mais Tempo:</div>
                <div>ABC123</div>
                <div className="font-medium">Data:</div>
                <div>August 15, 2024</div>
                <div className="font-medium">Horário:</div>
                <div>10:00 AM - 12:00 PM</div>
                <div className="font-medium">Localização:</div>
                <div>123 Main St, Anytown USA</div>
              </div>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Detalhes contratante</h2>
              <div className="grid grid-cols-2 gap-2 md:gap-4 text-sm md:text-base">
                <div className="font-medium">Nome:</div>
                <div>John Doe</div>
                <div className="font-medium">Email:</div>
                <div>john@example.com</div>
                <div className="font-medium">Telefone:</div>
                <div>+55 (62)1234567</div>
              </div>
            </div>
          </div>
          <Separator className="my-6 md:my-8 lg:my-10" />
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">Informações adicionais</h2>
            <p className="text-sm md:text-base text-muted-foreground">
            Obrigado por reservar conosco. Esperamos que tudo ocorra bem na resolução do seu problema no Vapt Vupt. Por favor, não hesite em nos informar se você tiver alguma dúvida ou necessidade de assistência.
            </p>
          </div>
          <Separator className="my-6 md:my-8 lg:my-10" />
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">Nossos Contatos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm md:text-base">
              <div>
                <div className="font-medium">Telefone:</div>
                <div>+55 (62)1234567</div>
              </div>
              <div>
                <div className="font-medium">Email:</div>
                <div>support@example.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CircleCheckIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

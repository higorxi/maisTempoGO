import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export function Answers() {
  return (
    <section className="w-full py-12 px-6 md:py-24 lg:py-32 bg-green-800">
      <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl shadow-md p-4 rounded-lg bg-green-900">
              Qual é o nosso serviço?
            </h2>
            <p className="mt-4 text-gray-200 md:text-xl/relaxed">
              Somos especializados em facilitar o agendamento de serviços no Vapt Vupt do estado de Goiás. Sabemos como pode ser complicado lidar com a burocracia e a espera, por isso, nossa missão é tornar esse processo o mais fácil e eficiente possível para você.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white shadow-md p-2 rounded-lg bg-green-700">
              Nossas obrigações
            </h3>
            <ul className="mt-4 space-y-2 text-gray-200">
              <li className="flex items-start gap-2 bg-green-600 p-2 rounded-lg shadow-sm hover:bg-green-500">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <span>Realizamos o agendamento de sua ida ao Vapt Vupt</span>
              </li>
              <li className="flex items-start gap-2 bg-green-600 p-2 rounded-lg shadow-sm hover:bg-green-500">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <span>Lhe informamos sobre o status do seu agendamento</span>
              </li>
              <li className="flex items-start gap-2 bg-green-600 p-2 rounded-lg shadow-sm hover:bg-green-500">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <span>Buscamos as melhores datas e horários para o seu agendamento</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white shadow-md p-2 rounded-lg bg-green-700">
              O que não fazemos
            </h3>
            <ul className="mt-4 space-y-2 text-gray-200">
              <li className="flex items-start gap-2 bg-green-600 p-2 rounded-lg shadow-sm hover:bg-green-500">
                <XIcon className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                <span>Não compartilhamos seus dados com terceiros</span>
              </li>
              <li className="flex items-start gap-2 bg-green-600 p-2 rounded-lg shadow-sm hover:bg-green-500">
                <XIcon className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                <span>Não temos nenhum vínculo direto com o Vapt Vupt</span>
              </li>
              <li className="flex items-start gap-2 bg-green-600 p-2 rounded-lg shadow-sm hover:bg-green-500">
                <XIcon className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                <span>Não cobramos taxas ou penalidades ocultas</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl shadow-md p-4 rounded-lg bg-green-900">
              Perguntas Frequentes
            </h2>
            <p className="mt-4 text-gray-200 md:text-xl/relaxed">
              Aqui estão as perguntas mais comuns que recebemos sobre nosso serviço. Se você tiver outras perguntas, não hesite em nos contatar.
            </p>
          </div>
          <div className="space-y-4">
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-green-700 px-4 py-3 text-left font-medium transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 shadow-sm">
                <span className="text-gray-100">Qual o valor do serviço?</span>
                <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180 text-gray-100" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pt-2 pb-4 text-black bg-white rounded-lg shadow-sm border-t-0">
                Nossa precificação é baseada no número de usuários e nas funcionalidades que você precisa. Oferecemos uma variedade de planos para atender ao seu orçamento e necessidades.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-green-700 px-4 py-3 text-left font-medium transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 shadow-sm">
                <span className="text-gray-100">Posso cancelar o serviço?</span>
                <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180 text-gray-100" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pt-2 pb-4 text-black bg-white rounded-lg shadow-sm border-t-0">
                Você pode cancelar sua assinatura a qualquer momento acessando sua conta e indo para a seção de faturamento. Não exigimos contratos de longo prazo, então você pode sair quando desejar.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-green-700 px-4 py-3 text-left font-medium transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 shadow-sm">
                <span className="text-gray-100">Existe algum vínculo com os órgãos?</span>
                <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180 text-gray-100" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pt-2 pb-4 text-black bg-white rounded-lg shadow-sm border-t-0">
                Somos uma empresa do setor privado devidamente regularizada, não possuímos vínculo com o Vapt Vupt ou qualquer outro órgão público. Nossa empresa auxilia no agendamento de documentos, e as taxas pagas em nosso site são únicas e exclusivas para a prestação de nossos serviços. Eventuais taxas e cobranças pagas junto ao órgão público solicitado não estão inclusas em nossa taxa de serviço.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-green-700 px-4 py-3 text-left font-medium transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 shadow-sm">
                <span className="text-gray-100">O serviço de vocês é ilegal?</span>
                <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180 text-gray-100" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pt-2 pb-4 text-black bg-white rounded-lg shadow-sm border-t-0">
                Não, nosso serviço é totalmente legal. Oferecemos uma ampla gama de integrações com ferramentas e softwares empresariais populares, permitindo que você conecte nosso serviço com as ferramentas que já utiliza.
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function ChevronDownIcon(props: any) {
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
      <path d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

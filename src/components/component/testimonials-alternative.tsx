import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function TestimonialsAlternative() {
  return (
    <section className="w-full py-12 px-6 md:py-24 lg:py-32 bg-azulGoias text-branco flex justify-center">
      <div className="container px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col items-center">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amareloGoias mb-2">
                O que nossos clientes dizem
              </h2>
              <p className="text-cinzaClaro text-center font-medium mb-8">
                Ouça nossos clientes em suas experiências com nossos serviços, após o agendamento de seu serviço, você poderá retornar e adicionar seu feedback.
              </p>
            </div>
            <div className="grid gap-8 w-full">
              {testimonials.map((testimonial, index) => (
                <div
                  className="bg-white bg-opacity-10 border border-branco rounded-lg shadow-lg p-6 flex flex-col justify-between h-full"
                  key={index} // A chave é necessária aqui
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border border-branco">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-branco">{testimonial.name}</div>
                      <div className="text-sm text-cinzaClaro">{testimonial.location}</div>
                    </div>
                    <div className="ml-auto flex items-center gap-0.5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'fill-amareloGoias' : 'fill-cinzaEscuro stroke-cinzaClaro'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-cinzaClaro">
                    &ldquo;{testimonial.comment}&ldquo;
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amareloGoias mb-2">
                Nossos números
              </h2>
              <p className="text-cinzaClaro text-center font-medium mb-8">
                Alguns números interessantes sobre nossos serviços.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {numbers.map((number, index) => (
                <div
                  className="bg-white bg-opacity-10 border border-branco rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-2 text-center overflow-hidden"
                  key={index}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-branco">{number.value}</div>
                  <div className="text-sm sm:text-base text-cinzaClaro">{number.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Maria Oliveira",
    location: "Goiânia, GO",
    image: "/placeholder-user.jpg",
    initials: "MO",
    rating: 5,
    comment: "Fiquei impressionada com a eficiência do agendamento no Meu Poupa. O site é fácil de usar e fui atendida exatamente no horário marcado. Serviço excelente, recomendo!"
  },
  {
    name: "João Silva",
    location: "Anápolis, GO",
    image: "/placeholder-user.jpg",
    initials: "JS",
    rating: 4,
    comment: "Eu não conseguia realizar nenhum agendamento, nunca tinha o horário que precisava disponível. O Poupa Serviços resolveu tudo pra mim!"
  },
  {
    name: "Ana Costa",
    location: "Catalão, GO",
    image: "/placeholder-user.jpg",
    initials: "AC",
    rating: 5,
    comment: "O atendimento foi super rápido e deu tudo certo! São extremamente atenciosos. Recomendo!"
  },
]

const numbers = [
  { value: "15K+", label: "Clientes" },
  { value: "95%", label: "Satisfação dos Clientes" },
  { value: "27+", label: "Cidades em Goiás" },
  { value: "4.7/5", label: "Nota no Reclame Aqui" },
  { value: "12+", label: "Funcionários" },
  { value: "1 dia útil", label: "Tempo máximo" },
]

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

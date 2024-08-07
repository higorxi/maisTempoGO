"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import foto1 from "../../../public/testemunhos/foto1.jpg"
import foto2 from "../../../public/testemunhos/foto2.jpg"
import foto3 from "../../../public/testemunhos/foto3.jpg"

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [
    {
      image: foto1,
      name: "João Batista",
      city: "Porangatu, Goiás",
      service: "Renovação da CNH",
      description: "The stylist was amazing and really listened to what I wanted. I am so happy with the results!",
      rating: 5,
    },
    {
      image: foto2,
      name: "Jane Smith",
      city: "Anápolis, Goiás",
      service: "RG - 1 VIA",
      description: "The massage therapist was incredibly skilled and really helped me relax. I will definitely be back.",
      rating: 4,
    },
    {
      image: foto3,
      name: "Michael Johnson",
      city: "Rio Verde, Goiás",
      service: "Emissão de passaporte",
      description: "The facial was so rejuvenating and my skin feels brand new. The staff was very professional.",
      rating: 3,
    },
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [testimonials.length])
  
  const currentTestimonial = testimonials[currentIndex]
  console.log(currentTestimonial.image);
  return (
    <section className="bg-blue-900 text-white py-12 px-6 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className="flex flex-col items-start gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-yellow-300">O que nossos clientes dizem</h2>
                <p className="text-gray-300">Ouça nossos clientes em suas experiências com nossos serviços, após o agendamento de seu serviço, você poderá retornar e adicionar seu feedback.</p>
              </div>
              <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-500 ease-in-out">
                <div className="absolute inset-0 z-10 flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-100">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-blue-800">{currentTestimonial.name}</h3>
                    <p className="text-gray-400">{currentTestimonial.city}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
                    ))}
                    {[...Array(5 - currentTestimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-gray-300" />
                    ))}
                  </div>
                </div>
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  width={300}
                  height={150}
                  className="h-[300px] w-full object-cover"
                  style={{ aspectRatio: "300/150", objectFit: "cover" }}
                />
                <div className="absolute inset-0 z-10 flex flex-col items-start justify-end gap-4 bg-gradient-to-t from-blue-900/90 to-blue-900/0 p-6">
                  <p className="text-gray-300">&quot;{currentTestimonial.description}&quot;</p>
                  <p className="text-gray-300">{currentTestimonial.service}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex flex-col items-start gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-yellow-300">Nossos números</h2>
                <p className="text-gray-300">Alguns números interessantes sobre nossos serviços.</p>
              </div>
              <div className="grid w-full gap-4">
                <div className="rounded-lg bg-gray-800 p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-white">10,000+</h3>
                  <p className="text-gray-300">Agendamentos</p>
                </div>
                <div className="rounded-lg bg-gray-800 p-6 shadow-sm flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-white">4.7/5</h3>
                  <StarIconFull className="h-5 w-5 text-yellow-500" />
                  <p className="text-gray-300">Avaliação Média</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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

function StarIconFull(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 24 24"
      fill="yellow"
      stroke="none"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

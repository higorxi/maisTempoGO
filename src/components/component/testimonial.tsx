"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [
    {
      image: "/placeholder-user.jpg",
      name: "John Doe",
      city: "New York",
      service: "Hair Styling",
      description: "The stylist was amazing and really listened to what I wanted. I am so happy with the results!",
      rating: 5,
    },
    {
      image: "/placeholder-user.jpg",
      name: "Jane Smith",
      city: "Los Angeles",
      service: "Massage",
      description: "The massage therapist was incredibly skilled and really helped me relax. I will definitely be back.",
      rating: 4,
    },
    {
      image: "/placeholder-user.jpg",
      name: "Michael Johnson",
      city: "Chicago",
      service: "Facial",
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
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className="flex flex-col items-start gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">O que nossos clientes dizem</h2>
                <p className="text-muted-foreground">Ouça nossos clientes em suas experiências com nossos serviços, após o agendamento de seu serviço, você poderá retornar e adicionar seu feedback. </p>
              </div>
              <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 z-10 flex items-center justify-between px-6 py-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{currentTestimonial.name}</h3>
                    <p className="text-muted-foreground">{currentTestimonial.city}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-primary" />
                    ))}
                    {[...Array(5 - currentTestimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-muted stroke-muted-foreground" />
                    ))}
                  </div>
                </div>
                <Image
                  src="/placeholder.svg"
                  alt={currentTestimonial.name}
                  width={800}
                  height={500}
                  className="h-[300px] w-full object-cover"
                  style={{ aspectRatio: "800/500", objectFit: "cover" }}
                />
                <div className="absolute inset-0 z-10 flex flex-col items-start justify-end gap-4 bg-gradient-to-t from-background/90 to-background/0 p-6">
                  <p className="text-muted-foreground">&quot;{currentTestimonial.description}&quot;</p>
                  <p className="text-muted-foreground">{currentTestimonial.service}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex flex-col items-start gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nossos números</h2>
                <p className="text-muted-foreground">Alguns números interessantes sobre nossos serviços.</p>
              </div>
              <div className="grid w-full gap-4">
                <div className="rounded-lg bg-muted p-6 shadow-sm">
                  <h3 className="text-2xl font-bold">10,000+</h3>
                  <p className="text-muted-foreground">Agendamentos</p>
                </div>
                <div className="rounded-lg bg-muted p-6 shadow-sm">
                  <h3 className="text-2xl font-bold">4.7/5</h3>
                  <p className="text-muted-foreground">Avaliação Média</p>
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

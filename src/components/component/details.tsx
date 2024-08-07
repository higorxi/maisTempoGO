"use client";
import { useState, useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import confetti from "canvas-confetti";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function Details() {
  const [showConfetti, setShowConfetti] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstName = "John"; 

  useEffect(() => {
    if (showConfetti && containerRef.current) {
      const end = Date.now() + 2500; 
      const duration = 2500;
      const animationEnd = end + duration;

      const interval = setInterval(() => {
        if (Date.now() > animationEnd) {
          clearInterval(interval);
          return;
        }
        confetti({
          particleCount: 40,
          angle: 60,
          spread: 105,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 40,
          angle: 120,
          spread: 75,
          origin: { x: 1 }
        });
      }, 100);

      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 2500);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [showConfetti]);

  const generatePDF = () => {
    if (containerRef.current) {
      html2canvas(containerRef.current).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; 
        const pageHeight = 295; 
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save(`${firstName}-recibo.pdf`);
      });
    }
  };

  useEffect(() => {
    generatePDF();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative max-w-3xl mx-auto p-6 md:p-8 lg:p-10"
      style={{ minHeight: '100vh', overflow: 'hidden' }} 
    >
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
                <div>+55 621234567</div>
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
                <div>+55 621234567</div>
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
  );
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
  );
}

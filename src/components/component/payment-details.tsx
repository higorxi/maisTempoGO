"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

export function PaymentDetails() {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      toast.success('Seu agendamento foi criado com sucesso! Prossiga com o pagamento.', { 
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, []);

  useEffect(() => {
    console.log("Setting up timer");
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer cleared");
    };
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890");
    toast.success('Chave copia e cola copiado com sucesso!', { 
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 w-full max-w-6xl mx-auto p-4 lg:p-8 mt-6 mb-8">
        <div className="grid gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Como pagar via PIX</h2>
            <ol className="space-y-4 text-sm text-gray-700">
              {['Abra seu aplicativo bancário habilitado para Pix.', 
                'Selecione a opção "Pagar via Pix".', 
                'Leia o código QR ou insira a chave COPIA E COLA.', 
                'Confirme os detalhes do pagamento e conclua a transação.'].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-none bg-gray-300 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p>{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Após pagar realizar o pagamento</h2>
            <ol className="space-y-4 text-sm text-gray-700">
              {['Aguarde a confirmação do pagamento.', 
                'Você receberá uma notificação no seu email.', 
                'Utilize os dados enviados no email para prosseguir em sua ida ao Vapt Vupt.', 
                'Se tiver algum problema, entre em contato com nossa equipe de suporte.'].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-none bg-gray-300 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p>{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/placeholder.svg"
              alt="QR Code"
              width="200"
              height="200"
              className="rounded-md shadow-md"
              style={{ aspectRatio: "1", objectFit: "cover" }}
            />
            <div className="text-2xl font-bold text-gray-900">R$ 12.99</div>
          </div>
          <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
            <div className="flex-1 bg-gray-100 p-3 rounded-md overflow-hidden text-ellipsis whitespace-nowrap text-gray-800" style={{ minHeight: '3rem' }}>
              1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
            </div>
            <Button onClick={copyToClipboard} variant="outline" className="text-gray-800 border-gray-300 hover:bg-gray-100">
              <CopyIcon className="h-4 w-4" />
              <span className="sr-only">Copy payment details</span>
            </Button>
          </div>
          <div className="flex items-center justify-between border-b border-gray-300 pb-2">
            <div className="text-sm text-gray-600">Tempo restante:</div>
            <div className="text-sm font-medium text-gray-900">{formatTime(timeLeft)}</div>
          </div>
          <div className="bg-gray-50 rounded-md p-4 text-sm border border-gray-300">
            <p>Transação assegurada por:</p>
            <div className="flex items-center gap-2">
              <LockIcon className="h-4 w-4 text-gray-600" />
              <span className="text-gray-600">Acme Payments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function CopyIcon(props: any) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function LockIcon(props: any) {
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
      <rect width="14" height="16" x="5" y="10" rx="2" ry="2" />
      <path d="M7 10V7a5 5 0 0 1 10 0v3" />
    </svg>
  )
}

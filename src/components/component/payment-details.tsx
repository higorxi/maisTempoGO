"use client"
import { Button } from "@/components/ui/button"
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export function PaymentDetails() {
  useEffect(() => {
    const message = localStorage.getItem('toastMessage');
    console.log("message", message)
    if (message) {
      toast(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      localStorage.removeItem('toastMessage');
    }
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 w-full max-w-6xl mx-auto p-4 lg:p-8">
      <div className="grid gap-6">
        <div className="bg-background rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Como pagar via PIX</h2>
          <ol className="space-y-4 text-sm">
            <li className="flex items-start gap-4">
              <div className="flex-none bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                1
              </div>
              <div>
                <p>Abra seu aplicativo bancário habilitado para Pix.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-none bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                2
              </div>
              <div>
                <p>Selecione a opção "Pagar via Pix".</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-none bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                3
              </div>
              <div>
                <p>Leia o código QR ou insira a chave COPIA E COLA.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-none bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                4
              </div>
              <div>
                <p>Confirme os detalhes do pagamento e conclua a transação.</p>
              </div>
            </li>
          </ol>
        </div>
        <div className="bg-background rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Após pagar realizar o pagamento</h2>
          <ol className="space-y-4 text-sm">
            <li className="flex items-start gap-4">
              <div className="flex-none bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                1
              </div>
              <div>
                <p>Aguarde a confirmação do pagamento.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-none bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                2
              </div>
              <div>
                <p>Você receberá uma notificação no seu email.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-none bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                3
              </div>
              <div>
                <p>Utilize os dados enviados no email para prosseguir em sua ida ao Vapt Vupt.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-none bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                4
              </div>
              <div>
                <p>Se tiver algum problema, entre em contato com nossa equipe de suporte.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-sm p-6 flex flex-col gap-6">
        <div className="flex flex-col items-center gap-4">
          <img
            src="/placeholder.svg"
            alt="QR Code"
            width="200"
            height="200"
            className="rounded-md"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
          <div className="text-2xl font-bold">R$ 12.99</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Copia e Cola:</div>
          <Button variant="outline">
            <CopyIcon className="h-4 w-4" />
            <span className="sr-only">Copy payment details</span>
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Tempo restante:</div>
          <div className="text-sm font-medium">1 hora</div>
        </div>
        <div className="bg-muted rounded-md p-4 text-sm">
          <p>Transação assegurada por:</p>
          <div className="flex items-center gap-2">
            <LockIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Acme Payments</span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

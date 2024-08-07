import { FooterAlternative } from "@/components/component/footer-alternative";
import { HeaderAlternative } from "@/components/component/header-alternative";
import { PaymentDetails } from "@/components/component/payment-details";

export default function Pagamento() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAlternative />
      <main className="flex-grow">
        <PaymentDetails />
      </main>
      <FooterAlternative />
    </div>
  );
}

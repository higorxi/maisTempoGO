import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";
import { HeaderAlternative } from "@/components/component/header-alternative";
import { PaymentDetails } from "@/components/component/payment-details";



export default function Pagamento() {
  return (
    <>
      <HeaderAlternative/>
      <PaymentDetails/>
      <Footer/>
    </>
  );
}

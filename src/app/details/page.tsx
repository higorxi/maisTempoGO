import { Details } from "@/components/component/details";
import { FooterAlternative } from "@/components/component/footer-alternative";
import { HeaderAlternative } from "@/components/component/header-alternative";



export default function Pagamento() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <HeaderAlternative/>
      <main className="flex-grow">
      <Details/>
      </main>
      <FooterAlternative/>
      </div>
    </>
  );
}

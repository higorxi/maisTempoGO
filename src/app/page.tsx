import { Answers } from "@/components/component/answers";
import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";
import { StartScheduling } from "@/components/component/start-scheduling";
import { Testimonial } from "@/components/component/testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <StartScheduling />
      <div id="testimonials">
        <Testimonial />
      </div>
      <div id="answers">
        <Answers />
      </div>
      <Footer />
    </>
  );
}

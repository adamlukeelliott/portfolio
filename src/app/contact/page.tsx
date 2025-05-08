import Navbar from "../modules/navbar";
import Footer from "../modules/footer";
import Background from "../modules/background";
import ContactForm from "../contact/contact-form"

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <Background>
          <ContactForm />
        </Background>
      <Footer />
    </div>
  );
}

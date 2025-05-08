import PasswordForm from "../password-checker/password-check";
import Navbar from "../modules/navbar";
import Footer from "../modules/footer";
import Background from "../modules/background";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Background>
        <div className="text-center">
          <h1 className="text-5xl text-center font-extrabold dark:text-white">
            Password Checker
          </h1>
        </div>
        <div className="m-9 justify-items-center">
          <PasswordForm />
        </div>
      </Background>
      <Footer />
    </div>
  );
}

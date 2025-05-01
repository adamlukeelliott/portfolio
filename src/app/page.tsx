import Image from "next/image";
import Navbar from "./modules/navbar";
import Footer from "./modules/footer";
import Background from "./modules/background";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Background>
        <main className="z-1 grid w-full grid-rows-[20px_1fr_auto] justify-items-center max-h-screen gap-16 pt-20 font-[family-name:var(--font-geist-sans)]">
          <div className="text-center">
            <h1 className="text-5xl text-center font-extrabold dark:text-white">
              Adam Elliott
            </h1>
            <h3 className="text-3xl font-bold dark:text-gray-400">
              Software Engineer
            </h3>
          </div>
          <div className="m-6 justify-items-center">
            <Image
              className="shadow-lg/40 rounded-full w-50 h-50 object-cover md:w-64 md:h-64 mb-5 border-solid border bg-black dark:bg-white p-1"
              src={"/images/profile.jpg"}
              width={800}
              height={800}
              alt="Picture of Adam Elliott"
            />

            <div>
              <div className="flex flex-wrap justify-center">
                <span className="mb-2 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg me-2">
                  <svg
                    className="w-6 h-6 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                    />
                  </svg>
                  Dublin, Ireland
                </span>
                <span className="mb-2 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg me-2">
                  <svg
                    className="mr-1 w-6 h-6 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                    />
                  </svg>
                  <a href="mailto:adam.elliott443@gmail.com">
                    adam.elliott443@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </main>
      </Background>
      <Footer />
    </div>
  );
}

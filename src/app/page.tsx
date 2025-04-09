import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full w-full [&>div]:absolute [&>div]:inset-0 
    dark:[&>div]:bg-[radial-gradient(circle_800px_at_50%_200px,#110f69,transparent)]
    [&>div]:bg-[radial-gradient(circle_800px_at_50%_200px,#00bfff,transparent)]">
    <div className="grid grid-rows-[20px_1fr_auto] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center">
        <h1 className="text-5xl text-center font-extrabold dark:text-white">
          Adam Elliott
        </h1>
        <h3 className="text-3xl font-bold dark:text-gray-400">
          Software Engineer
        </h3>
      </div>
      <div className="m-9 justify-items-center">
        <Image
          className="shadow-lg/40 rounded-full w-50 h-50 object-cover md:w-64 md:h-64 mb-5 border-1 border-solid border border-black bg-white dark:bg-purple-900 p-2"
          src={"/images/profile.jpg"}
          width={800}
          height={800}
          alt="Picture of Adam Elliott"
        />

        <div>
          <span className="shadow-lg/40 bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg me-2 dark:bg-purple-900 dark:text-gray-400 border border-gray-700 ">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
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
          <span className="shadow-lg/40 bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg me-2 dark:bg-purple-900 dark:text-gray-400 border border-gray-700 ">
            <svg
              className="mr-1 w-6 h-6 text-gray-800 dark:text-white"
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

          <div className="relative my-10">
            <hr className="shadow-lg/40 border-t-2 text-black dark:text-gray-700" />
            <span className="shadow-lg/40 absolute rounded-lg left-1/2 transform -translate-x-1/2 -top-3 bg-black dark:bg-gray-700 px-4 text-white dark:text-gray-400">
              Social Media
            </span>
          </div>
          <div className="w-full h-auto  flex items-center justify-center gap-2 flex-wrap">
            <a
              href="https://www.linkedin.com/in/adam-elliott-4b8526166/"
              className="shadow-lg/40 p-2 rounded-lg flex items-center border dark:border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              href="https://github.com/adamlukeelliott"
              className="shadow-lg/40 p-2 rounded-lg flex items-center border dark:border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

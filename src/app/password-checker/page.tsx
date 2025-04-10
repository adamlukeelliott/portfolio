import PasswordForm from '@/app/password-checker/password-check';

export default function Home() {
  return (
    <div className="relative h-full w-full [&>div]:absolute [&>div]:inset-0 
    dark:[&>div]:bg-[radial-gradient(circle_800px_at_50%_200px,#110f69,transparent)]
    [&>div]:bg-[radial-gradient(circle_800px_at_50%_200px,#00bfff,transparent)]">
    <div className="grid grid-rows-[20px_1fr_auto] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center">
        <h1 className="text-5xl text-center font-extrabold dark:text-white">
          Password Checker
        </h1>
      </div>
      <div className="m-9 justify-items-center">
        <PasswordForm />
        <div className="mt-8 w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-purple-900 dark:border-gray-600 dark:text-white">
          <a href="../" className="text-center block w-full px-4 py-2 border border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white transition-all rounded-lg">
            Home
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

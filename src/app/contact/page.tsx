"use client";

import Navbar from "../modules/navbar";
import Footer from "../modules/footer";
import Background from "../modules/background";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ message: "", email: "" });
  const [, setResponse] = useState("");
  const [contactVisible, setContactVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setContactVisible(false);
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setResponse(`Server says: ${JSON.stringify(data.received)}`);
      throw new Error("test");
    } catch {
      setSendError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Background>
        {loading && (
          <div role="status" className="flex flex-col items-center mt-5">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}

        {!contactVisible && !loading && !sendError && (
          <h1 className="text-5xl text-center font-extrabold dark:text-white">
            Thank you, your message has been sent!
          </h1>
        )}

        {!loading && sendError && (
          <h1 className="text-5xl text-center font-extrabold dark:text-white">
            An error has occured sending your message, please try again later.
          </h1>
        )}
        {contactVisible && (
          <>
            <div id="contact-form" className="text-center">
              <h1 className="text-5xl text-center font-extrabold dark:text-white">
                Contact
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center mt-5"
            >
              <label htmlFor="email" className="text-xl">
                E-Mail:
              </label>
              <input
                required
                pattern="[^ @]*@[^ @]*"
                type="text"
                name="email"
                onChange={handleChange}
                className="dark:bg-gray-700 p-1 border-gray-400 border dark:border-none rounded-md w-[90%] lg:w-[50%]"
              ></input>
              <br />
              <label htmlFor="message" className="text-xl">
                Message:
              </label>
              <textarea
                required
                name="message"
                onChange={handleChange}
                className="dark:bg-gray-700 p-1 border border-gray-400 dark:border-none rounded-md w-[90%] lg:w-[50%] h-50"
              ></textarea>
              <br />
              <input
                type="submit"
                className="transition bg-transparent dark:hover:bg-gray-600 hover:bg-gray-200 content-center border border-gray-400 rounded-md p-3 w-50"
              />
            </form>
          </>
        )}
      </Background>
      <Footer />
    </div>
  );
}

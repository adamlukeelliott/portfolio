"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  useEffect(() => {
    const navLinks = document.querySelectorAll(
      "[data-navlink]"
    ) as NodeListOf<HTMLAnchorElement>;
  
    navLinks.forEach((link) => {
      if (window.location.href === link.href) {
        link.setAttribute("aria-current", "page");
      }
    });
  })

  return (
    <header className="z-50">
      <nav className="px-4 lg:px-6 py-6">
        <div className="flex flex-wrap items-center justify-center mx-auto max-w-screen-xl">
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col transform mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="aria-[current=page]:text-black dark:aria-[current=page]:text-white transition-all block py-2 pr-4 pl-3 text-gray-500 hover:text-black border-b border-gray-800 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  data-navlink
                >
                  Home
                </a>
              </li>
              <li>
                <div className="relative inline-block text-left group">
                  <span
                    className="aria-[current=page]:text-black dark:aria-[current=page]:text-white transition-all block py-2 pr-4 pl-3 text-gray-500 hover:text-black border-b border-gray-800 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    data-navlink
                  >
                    Demos
                  </span>

                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-400 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                    <ul className="py-1 text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                      <li>
                        <a
                          href="/password-checker"
                          className="aria-[current=page]:text-black dark:aria-[current=page]:text-white block px-4 py-2 appearance-none text-gray-400"
                          data-navlink
                        >
                          Password Checker
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="aria-[current=page]:text-black dark:aria-[current=page]:text-white transition-all block py-2 pr-4 pl-3 text-gray-500 hover:text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  data-navlink
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

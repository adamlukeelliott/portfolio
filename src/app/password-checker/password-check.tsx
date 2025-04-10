"use client";

import { useState, useEffect, ChangeEvent } from "react";
import zxcvbn from "zxcvbn";

interface FormData {
  password: string;
}

const PasswordForm = () => {
  const [formData, setFormData] = useState<FormData>({
    password: "",
  });

  const [score, setScore] = useState<number>(0);
  const [widthClass, setWidthClass] = useState<string>("w-0");
  const [strengthText, setStrengthText] = useState<string>("");

  useEffect(() => {
    setScore(zxcvbn(formData.password).score);
    if (score > 0) {
      setWidthClass(`w-${score}/4`);
      setStrengthText(getStrengthTextString(score));
    } else {
      setWidthClass("w-0");
      setStrengthText("");
    }
  }, [formData]);

  function getStrengthTextString(score: number): string {
    switch (score) {
      case 1: return "Weak";
      case 2: return "Moderate";
      case 3: return "Strong";
      case 4: return "Very Strong";
      default: return "";
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
      <input
        type="password"
        name="password"
        autoComplete="off"
        value={formData.password}
        onChange={handleChange}
        className="text-center w-xl text-6xl bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter password..."
      />

      <h3 className="mt-6 text-center text-3xl font-bold dark:text-gray-400">
        Password Strength:
      </h3>

      <div className="w-full h-8 bg-gray-200 rounded-full dark:bg-gray-700">
        <div className={`h-8 bg-blue-600 rounded-full dark:bg-blue-500 transition-all ${widthClass} flex items-center justify-center transition`}>
          {strengthText}
        </div>
      </div>
    </form>
  );
};

export default PasswordForm

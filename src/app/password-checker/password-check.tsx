"use client"

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
  const [strengthColour, setStrengthColour] = useState<string>("bg-red-500");

  const widthMap: Record<number, string> = {
    0: "w-0",
    1: "w-1/4",
    2: "w-2/4",
    3: "w-3/4",
    4: "w-full",
  };

  const strengthTextMap: Record<number, string> = {
    0: "",
    1: "Weak",
    2: "Moderate",
    3: "Strong",
    4: "Very Strong",
  };

  const strengthColourMap: Record<number, string> = {
    1: "bg-red-500",
    2: "bg-orange-500",
    3: "bg-yellow-500",
    4: "bg-green-500",
  };

  useEffect(() => {
    setScore(zxcvbn(formData.password).score);
    setWidthClass(widthMap[score]);
    setStrengthText(strengthTextMap[score]);
    setStrengthColour(strengthColourMap[score]);
  }, [formData]);

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
        className="text-center w-full text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter password..."
      />

      <h3 className="mt-6 text-center text-3xl font-bold dark:text-gray-400">
        Password Strength:
      </h3>

      <div className="w-full h-8 bg-gray-200 rounded-full dark:bg-gray-700">
        <div className={`transition-all h-8 ${strengthColour} rounded-full ${widthClass} flex items-center justify-center`}>
          {strengthText}
        </div>
      </div>
    </form>
  );
};

export default PasswordForm

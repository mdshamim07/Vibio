"use client";

import { useRef, useState } from "react";

export const inputs = [
  { id: 0, type: "number", name: "otp1" },
  { id: 1, type: "number", name: "otp2" },
  { id: 2, type: "number", name: "otp3" },
  { id: 3, type: "number", name: "otp4" },
  { id: 4, type: "number", name: "otp5" },
  { id: 5, type: "number", name: "otp6" },
];

export default function VerifyInputs({ error, setError, loading }) {
  const elementRef = useRef([]);
  const [otpValue, setOtpValue] = useState("");

  function handleOtpChange(event, index) {
    setError(null);
    const updatedOtp = [...otpValue];
    updatedOtp[index] = event.target.value;
    setOtpValue(updatedOtp.join(""));

    // Move focus to the next input field if the current one has a value
    if (event.target.value.length === 1 && index < inputs.length - 1) {
      elementRef.current[index + 1]?.focus();
    }

    // Move focus to the previous input if backspace is pressed and the field is empty
    if (
      event.target.value.length === 0 &&
      event.nativeEvent.inputType === "deleteContentBackward"
    ) {
      elementRef.current[index - 1]?.focus();
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        {inputs.map((input, index) => (
          <input
            onInput={(event) => handleOtpChange(event, index)}
            key={input?.id}
            name={input?.name}
            type={input?.type}
            ref={(el) => (elementRef.current[index] = el)}
            maxLength={1}
            className={`w-12 h-12 text-center text-lg border  rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
              loading ? "opacity-50" : "opacity-100"
            } ${error ? "border-red-600" : "border-gray-300"}`}
          />
        ))}
      </div>
      <input type="hidden" name="otpField" value={otpValue} readOnly />
    </div>
  );
}

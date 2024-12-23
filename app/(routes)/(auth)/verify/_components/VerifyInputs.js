"use client";

import { useRef } from "react";

export const inputs = [
  { id: 0, type: "number", name: "otp1" },
  { id: 1, type: "number", name: "otp2" },
  { id: 2, type: "number", name: "otp3" },
  { id: 3, type: "number", name: "otp4" },
  { id: 4, type: "number", name: "otp5" },
  { id: 5, type: "number", name: "otp6" },
];

export default function VerifyInputs() {
  const elementRef = useRef([]);

  function handleOtpChange(event, index) {
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
    <div className="flex justify-between items-center mb-6">
      {inputs.map((input, index) => (
        <input
          onInput={(event) => handleOtpChange(event, index)}
          key={input?.id}
          name={input?.name}
          type={input?.type}
          ref={(el) => (elementRef.current[index] = el)}
          maxLength={1}
          className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      ))}
    </div>
  );
}

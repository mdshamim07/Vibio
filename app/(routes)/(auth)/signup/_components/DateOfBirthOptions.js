"use client";
import { useEffect, useState } from "react";

export default function DateOfBirthOptions() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");
  const days = Array.from({ length: 31 }, (_, i) => i + 1); // Days 1-31
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 120 }, (_, i) => currentYear - i); // Last 120 years
  useEffect(() => {
    if (day.length === 0 && month.length === 0 && year.length === 0) {
      setDate("");
    } else {
      setDate(`${day}/${month}/${year}`);
    }
  }, [day, month, year]);
  return (
    <div className="mb-4">
      <label
        className="block text-sm font-medium text-gray-700 mb-1"
        htmlFor="dob"
      >
        Date of Birth
      </label>
      <input type="hidden" name="dateOfBirth" defaultValue={date} />
      <div className="grid grid-cols-3 gap-2">
        {/* Day */}
        <select
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        >
          <option value="" disabled>
            Day
          </option>
          {days.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        {/* Month */}
        <select
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        >
          <option value="">Month</option>
          {months.map((m, idx) => (
            <option key={idx} value={m}>
              {m}
            </option>
          ))}
        </select>

        {/* Year */}
        <select
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        >
          <option value="">Year</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

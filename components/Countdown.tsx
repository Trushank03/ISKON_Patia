"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2027-02-09T00:00:00"); // ✅ Correct opening date
    const difference = targetDate.getTime() - new Date().getTime();

    let timeLeft: {
      days?: number;
      hours?: number;
      minutes?: number;
      seconds?: number;
    } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-16 text-center">
  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-bold text-[#B23A2E] mb-2">
    TOVP GRAND OPENING COUNTDOWN
  </h2>

  {/* Divider line with center design */}
  <div className="flex justify-center mb-8">
    <img
      src="/images/heading-divider.png"  // 👈 put your divider image in public/images/
      alt="divider"
      className="w-40 md:w-52"
    />
  </div>

   {/* Paragraph */}
  <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
    A countdown for grand opening of Sri Sri Radha Nialmadhava Temple. Opening
    date is on <span className="font-semibold text-gray-800">09th February 2027</span>.
  </p>

  {/* Blockquote */}
  <blockquote className="italic text-sky-700 mb-10 max-w-3xl mx-auto border-l-4 border-teal-500 pl-4">
    "The year 2027 marks the 50th anniversary of Srila Prabhupada’s historic
    arrival in Bhubaneswar. During his 16-day stay, he began translating the
    Tenth Canto of the ŚrīmadBhāgavatam and established his 108th and final
    temple in Nayapalli. To honor this divine milestone, we are dedicating a new
    temple and offering a community of sincere devotees at his lotus feet—as an
    expression of our deep gratitude and lifelong commitment to continue his
    mission."
  </blockquote>

  {/* Countdown */}
  <div className="flex justify-center gap-4 md:gap-6 text-white font-bold">
    {[
      { label: "Days", value: timeLeft.days },
      { label: "Hours", value: timeLeft.hours },
      { label: "Minutes", value: timeLeft.minutes },
      { label: "Seconds", value: timeLeft.seconds },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-6 rounded-lg shadow-md w-20 md:w-24"
      >
        <span className="text-2xl md:text-3xl block">
          {item.value || 0}
        </span>
        <span className="block text-xs md:text-sm font-medium">
          {item.label}
        </span>
      </div>
    ))}
  </div>
</section>


  );
}

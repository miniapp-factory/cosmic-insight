"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Option = {
  label: string;
  value: string;
};

export default function Quiz() {
  const options: Option[] = [
    { label: "Paris", value: "Paris" },
    { label: "Berlin", value: "Berlin" },
    { label: "Madrid", value: "Madrid" },
    { label: "Rome", value: "Rome" },
  ];

  const correctAnswer = "Paris";

  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleClick = (value: string) => {
    setSelected(value);
    setAnswered(true);
  };

  const reset = () => {
    setSelected(null);
    setAnswered(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">What is the capital of France?</h2>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <Button
            key={opt.value}
            variant="outline"
            onClick={() => handleClick(opt.value)}
            disabled={answered}
          >
            {opt.label}
          </Button>
        ))}
      </div>
      {answered && (
        <div className="flex flex-col items-center gap-2">
          {selected === correctAnswer ? (
            <p className="text-green-600 font-medium">Correct!</p>
          ) : (
            <p className="text-red-600 font-medium">
              Incorrect. The correct answer is {correctAnswer}.
            </p>
          )}
          <Button onClick={reset}>Try again</Button>
        </div>
      )}
    </div>
  );
}

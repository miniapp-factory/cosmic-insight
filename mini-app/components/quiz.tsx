"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScoreTable from "@/components/score-table";

type Option = {
  label: string;
  value: string;
};

type Question = {
  text: string;
  options: Option[];
  correct: string;
};

const questions: Question[] = [
  {
    text: "What is the capital of France?",
    options: [
      { label: "Paris", value: "Paris" },
      { label: "Berlin", value: "Berlin" },
      { label: "Madrid", value: "Madrid" },
      { label: "Rome", value: "Rome" },
    ],
    correct: "Paris",
  },
  {
    text: "What is the capital of Germany?",
    options: [
      { label: "Berlin", value: "Berlin" },
      { label: "Munich", value: "Munich" },
      { label: "Hamburg", value: "Hamburg" },
      { label: "Frankfurt", value: "Frankfurt" },
    ],
    correct: "Berlin",
  },
  {
    text: "What is the capital of Italy?",
    options: [
      { label: "Rome", value: "Rome" },
      { label: "Milan", value: "Milan" },
      { label: "Naples", value: "Naples" },
      { label: "Venice", value: "Venice" },
    ],
    correct: "Rome",
  },
  {
    text: "What is the capital of Spain?",
    options: [
      { label: "Madrid", value: "Madrid" },
      { label: "Barcelona", value: "Barcelona" },
      { label: "Valencia", value: "Valencia" },
      { label: "Seville", value: "Seville" },
    ],
    correct: "Madrid",
  },
  {
    text: "What is the capital of Canada?",
    options: [
      { label: "Ottawa", value: "Ottawa" },
      { label: "Toronto", value: "Toronto" },
      { label: "Vancouver", value: "Vancouver" },
      { label: "Montreal", value: "Montreal" },
    ],
    correct: "Ottawa",
  },
  {
    text: "What is the capital of Brazil?",
    options: [
      { label: "Brasília", value: "Brasília" },
      { label: "Rio de Janeiro", value: "Rio de Janeiro" },
      { label: "São Paulo", value: "São Paulo" },
      { label: "Salvador", value: "Salvador" },
    ],
    correct: "Brasília",
  },
  {
    text: "What is the capital of Japan?",
    options: [
      { label: "Tokyo", value: "Tokyo" },
      { label: "Kyoto", value: "Kyoto" },
      { label: "Osaka", value: "Osaka" },
      { label: "Nagoya", value: "Nagoya" },
    ],
    correct: "Tokyo",
  },
  {
    text: "What is the capital of Australia?",
    options: [
      { label: "Canberra", value: "Canberra" },
      { label: "Sydney", value: "Sydney" },
      { label: "Melbourne", value: "Melbourne" },
      { label: "Brisbane", value: "Brisbane" },
    ],
    correct: "Canberra",
  },
  {
    text: "What is the capital of India?",
    options: [
      { label: "New Delhi", value: "New Delhi" },
      { label: "Mumbai", value: "Mumbai" },
      { label: "Kolkata", value: "Kolkata" },
      { label: "Chennai", value: "Chennai" },
    ],
    correct: "New Delhi",
  },
  {
    text: "What is the capital of China?",
    options: [
      { label: "Beijing", value: "Beijing" },
      { label: "Shanghai", value: "Shanghai" },
      { label: "Guangzhou", value: "Guangzhou" },
      { label: "Shenzhen", value: "Shenzhen" },
    ],
    correct: "Beijing",
  },
  {
    text: "What is the capital of Russia?",
    options: [
      { label: "Moscow", value: "Moscow" },
      { label: "Saint Petersburg", value: "Saint Petersburg" },
      { label: "Novosibirsk", value: "Novosibirsk" },
      { label: "Yekaterinburg", value: "Yekaterinburg" },
    ],
    correct: "Moscow",
  },
  {
    text: "What is the capital of Egypt?",
    options: [
      { label: "Cairo", value: "Cairo" },
      { label: "Alexandria", value: "Alexandria" },
      { label: "Giza", value: "Giza" },
      { label: "Luxor", value: "Luxor" },
    ],
    correct: "Cairo",
  },
  {
    text: "What is the capital of Mexico?",
    options: [
      { label: "Mexico City", value: "Mexico City" },
      { label: "Guadalajara", value: "Guadalajara" },
      { label: "Monterrey", value: "Monterrey" },
      { label: "Puebla", value: "Puebla" },
    ],
    correct: "Mexico City",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const handleClick = (value: string) => {
    setSelected(value);
    setAnswered(true);
    if (value === q.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setCurrent((prev) => prev + 1);
    setSelected(null);
    setAnswered(false);
  };

  const resetQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {finished ? (
        <ScoreTable
          score={score}
          total={questions.length}
          level={Math.floor(current / 5) + 1}
        />
      ) : (
        <>
          {!finished && (
            <img
              src={`/level${Math.floor(current / 5) + 1}.png`}
              alt={`Level ${Math.floor(current / 5) + 1}`}
              className="w-32 h-32 mb-4"
            />
          )}
          <h2 className="text-xl font-semibold">{q.text}</h2>
          <div className="flex flex-col gap-2">
            {q.options.map((opt) => (
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
          {current > 0 && (
            <Button
              variant="outline"
              onClick={() => {
                setCurrent((prev) => prev - 1);
                setSelected(null);
                setAnswered(false);
              }}
            >
              Back
            </Button>
          )}
          {answered && (
            <div className="flex flex-col items-center gap-2">
              {selected === q.correct ? (
                <p className="text-green-600 font-medium">Correct!</p>
              ) : (
                <p className="text-red-600 font-medium">
                  Incorrect. The correct answer is {q.correct}.
                </p>
              )}
              {current < questions.length - 1 ? (
                <Button onClick={nextQuestion}>Next</Button>
              ) : (
                <Button
                  onClick={() => {
                    setFinished(true);
                  }}
                >
                  Finish
                </Button>
              )}
            </div>
          )}
          <Button onClick={resetQuiz}>Restart</Button>
        </>
      )}
    </div>
  );
}

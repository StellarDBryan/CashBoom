"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type UserStats = {
  lives: number;
  points: number;
  streak: number;
  loseLife: () => void;
  gainPoints: (amount: number) => void;
  incrementStreak: () => void;
  resetStats: () => void;
};

const UserStatsContext = createContext<UserStats | null>(null);

export const UserStatsProvider = ({ children }: { children: ReactNode }) => {
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);

  const loseLife = () => setLives((prev) => Math.max(prev - 1, 0));
  const gainPoints = (amount: number) => setPoints((prev) => prev + amount);
  const incrementStreak = () => setStreak((prev) => prev + 1);
  const resetStats = () => {
    setLives(3);
    setPoints(0);
    setStreak(0);
  };

  return (
    <UserStatsContext.Provider value={{ lives, points, streak, loseLife, gainPoints, incrementStreak, resetStats }}>
      {children}
    </UserStatsContext.Provider>
  );
};

export const useUserStats = () => {
  const context = useContext(UserStatsContext);
  if (!context) {
    throw new Error("useUserStats must be used within a UserStatsProvider");
  }
  return context;
};
